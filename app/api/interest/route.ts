// src/app/api/interest/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { instructor, workshop, type = "interest", page = "", ua = "" } =
      await req.json();

    if (!instructor || !workshop) {
      return NextResponse.json(
        { ok: false, error: "Missing instructor or workshop" },
        { status: 400 }
      );
    }

    const ts = new Date().toISOString();
    const ip = req.headers.get("x-forwarded-for") || "local";

    // Always log to your server console (shows in `npm run dev` output)
    console.log("INTEREST", { instructor, workshop, type, page, ua, ts, ip });

    // Optional: send to Slack if SLACK_WEBHOOK_URL is set
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      const payload = {
        text: `🔔 ILD ${type}: ${workshop} — ${instructor}`,
        blocks: [
          { type: "header", text: { type: "plain_text", text: "🔔 New Interest Click" } },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Instructor:*\n${instructor}` },
              { type: "mrkdwn", text: `*Workshop:*\n${workshop}` },
              { type: "mrkdwn", text: `*Time:*\n${ts}` },
              { type: "mrkdwn", text: `*IP:*\n${ip}` },
              { type: "mrkdwn", text: `*Page:*\n${page}` },
              { type: "mrkdwn", text: `*UA:*\n${ua}` },
            ],
          },
        ],
      };

      const resp = await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Slack usually responds with plain text "ok"
      const text = await resp.text();
      if (!resp.ok || text !== "ok") {
        console.error("Slack webhook failed:", resp.status, text);
        return NextResponse.json(
          { ok: false, error: "Slack error", status: resp.status, slack: text },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
