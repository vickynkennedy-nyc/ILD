"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
type Workshop = {
  id: string;
  title: string;
  desc?: string;
};

type Instructor = {
  id: string;
  name: string;
  title: string;
  headshot: string;
  bio: string;
  workshops: Workshop[];
  tags: string[];
};

// =============================================
// ILD Launch Waitlist Page — SOLID, POLISHED THEME
// Colors: primary #4c3bcf, accent #3dc2ec, dark #090733
// Logo at /public/ILD.svg, headshots in /public/instructors/
// =============================================

const BRAND = {
  primary: "#4c3bcf",
  accent: "#3dc2ec",
  dark: "#090733",
} as const;

export default function Page() {
  const WAITLIST_ENDPOINT = "https://formspree.io/f/xrbajpea";

  const instructors: Instructor[] = [
    {
      id: "inst1",
      name: "Ian Saville",
      title: "Managing Partner, Collabic",
      headshot: "/instructors/ian.png",
      bio: "Ian Saville is a leadership development and learning strategist with 15+ years of experience building scalable programs and coaching senior leaders. Currently the co-founder of Collabic and previously a leadership development leader at Meta, he's known for driving global initiatives that strengthen teams and amplify impact.",
      workshops: [
        {
          id: "w1",
          title: "Year One: Build Your Practice with Purpose",
          desc: "A workshop designed for aspiring solopreneurs ready to step into entrepreneurship with clarity and confidence. Whether you're breaking away from corporate life, launching a coaching or consulting practice, or just beginning to imagine your business taking shape, this 3-hour intensive is built to meet you where you are. You'll move from fuzzy ideas to concrete offerings, establish a sustainable rhythm for running your business, and confront the practical (and emotional) realities of year one. If you're asking yourself, How do I actually do this?, you’re not alone, and this class is for you. Together we’ll explore your motivations, define your product, identify your audience, and map your next moves with rigor and heart."
        },
      ],
      tags: ["Coaching", "Leadership"],
    },
    {
      id: "inst2",
      name: "Natalie Anders",
      title: "Head of Global Sales Onboarding, Intuit",
      headshot: "/instructors/natalie.png",
      bio: "Natalie Anders is a global sales enablement and learning development leader with over 10 years of experience designing programs that scale impact across organizations. Currently Head of Global Sales Onboarding at Intuit and formerly a senior leader at Amazon Web Services, she has consistently delivered measurable results.",
      workshops: [
         {
          id: "w1",
          title: "The Collaborative Edge: Unlocking Performance Through Social Learning Ecosystems",
          desc: "What if your team could learn faster, remember more, and deliver bigger results—together? The Collaborative Edge reveals how to replace passive training with dynamic social learning that sticks. Through proven strategies and real results—like the 22% boost in closed-won deals —you’ll discover how to create peer-driven ecosystems that accelerate skills, fuel engagement, and drive measurable business impact."
        },
      ],
      tags: ["Enablement", "Social Learning"],
    },
    {
      id: "inst3",
      name: "Christine Bower",
      title: "Sr Specialist, Marketing Enablement, InvestCloud",
      headshot: "/instructors/christine.png",
      bio: "Christine Bower brings over a decade of experience designing impactful learning programs for industry leaders including Facebook, LinkedIn, and TikTok. She served as Lead Instructional Designer for Google's Project Management certificate on Coursera and has orchestrated complex learning initiatives from AI adoption programs to partner certification systems.",
      workshops: [
         {
          id: "w1",
          title: "From Chaos to Clarity: Project Management Skills for Learning Leaders",
          desc: "Tired of missed deadlines, scope creep, and stakeholders who think everything is urgent? This hands-on workshop gives L&D professionals the practical frameworks to transform chaotic project requests into structured, successful learning initiatives. You'll walk away with project planning templates and boundary-setting techniques that actually work. No more being the reactive order-taker—time to become the proactive strategic partner your organization needs."
        },
      ],
      tags: ["Project Management", "L&D"],
    },
    {
      id: "inst4",
      name: "David Fulford",
      title: "Sr Manager of Learning Strategy, Walt Disney Co",
      headshot: "/instructors/david.jpg",
      bio: "David Fulford is an experienced professional with over 20 years of expertise in learning and development, leadership, executive development, human resources, and EdTech. As the Senior Manager of Learning Strategy at the Walt Disney Company, he designs and delivers executive and leadership development programs for over 30K leaders globally.",
      workshops: [
        {
          id: "w1",
          title: "From Order-Taker to Strategic Partner: Diagnosing Needs and Influencing Requestors",
          desc: "Have you been asked for a training solution without opportunity to understand the need? An important step in designing a training solution starts with being a consultant and understanding the context of what is being solved for and how it will be seen as successful. Let’s spend time reviewing how to understand the need, define success, and the conversations to get you and the requestor aligned."
        },
      ],
      tags: ["Leadership", "L&D"],
    },
    {
  id: "inst5",
  name: "Vicky Kennedy",
  title: "Chief Education Strategist, Echtus",
  headshot: "/instructors/vicky.png",
  bio: "Vicky Kennedy is an education and certification strategist with over two decades of experience building programs for enterprises such as Amazon, Meta, Mastercard, Autodesk, and Pinterest. Founder & CEO of Echtus and ILD, she’s a frequent speaker and writer on education strategy, measurement, and program design.",
  workshops: [
     {
          id: "w1",
          title: "Building for Business Impact ",
          desc: "Description to come."
        },
  ],
  tags: ["Instructional Design", "Customer Education"],
},
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Institute of Learning Design (ILD)',
            url: 'https://instituteoflearningdesign.com',
            sameAs: ['https://www.linkedin.com/company/REPLACE_ME', 'https://x.com/REPLACE_ME'],
            description: 'Practical, business-focused professional development for learning designers. Expert-led workshops, mentorship, and standards-driven quality.'
          })
        }}
      />

      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
  <img
    src="/ILD-2025.png"
    alt="ILD Logo"
    className="shrink-0"
    style={{ height: 80, width: "auto", display: "block" }}
  />
</Link>
          <a
            href="#waitlist"
            className="inline-flex items-center rounded-full px-4 py-2 text-white text-sm font-medium shadow-sm hover:opacity-90"
            style={{ backgroundColor: BRAND.accent }}
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: BRAND.dark }}>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white" style={{ backgroundColor: BRAND.primary }}>
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Pre‑launch • Join the waitlist
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
  Design Learning <span className="whitespace-nowrap">that Drives Results</span>
</h1>
              <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-2xl">
                Cohort workshops, mentorship, and tools for modern learning design at work.
              </p>
              <div className="mt-8 max-w-xl">
                <WaitlistForm endpoint={WAITLIST_ENDPOINT} theme="light" />
                <p className="mt-3 text-xs text-white/70">No spam. We’ll email when cohorts and mentorship open.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* Why ILD */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: BRAND.dark}}>What makes us different</h2>
            <p className="mt-3 text-slate-600">Learn the methods that translate design craft into business results, without paying high prices for outdated certificates. Every session is live, interactive, and led by humans who’ve built successful programs at scale.</p>
          </div>
          <ul className="md:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Expert-Led Workshops', desc: "Learn from those who’ve led learning initiatives at companies like Amazon, TikTok, Intuit, and Walt Disney Co." },
              { title: 'Live and Hybrid Experiences', desc: "On demand courses are convenient, but nothing beats face time with real people." },
              { title: 'Relevant and Timely', desc: "Keep your skills up to date with the latest approaches to learning design that are actually used in the workplace." },
              { title: 'Affordable and Flexible', desc: "Take advantage of affordable workshops, with membership discounts coming soon." },
            ].map((f) => (
              <li key={f.title} className="rounded-2xl border p-5" style={{ borderColor: BRAND.primary }}>
                <h3 className="font-medium" style={{ color: BRAND.dark }}>{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: BRAND.dark}}>Meet the experts</h2>
            <p className="mt-2 text-slate-600">Five leaders shaping the field of learning design, with workshops to match.</p>
          </div>
          <a href="#waitlist" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white text-sm shadow-sm hover:opacity-95" style={{ backgroundColor: BRAND.primary }}>
            Get early access
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
  {instructors.map((inst) => (
    <div key={inst.id} className="w-full sm:w-1/2 lg:w-1/3 max-w-sm">
      <InstructorCard instructor={inst} />
    </div>
  ))}
</div>
      </section>

      {/* How it works (polished) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-[#F6F7FF] p-8 border" style={{ borderColor: BRAND.accent }}>
          <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: BRAND.dark }}>What happens next?</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[{ step: '1', title: 'Join the waitlist', desc: 'Tell us your interests to influence the first wave of workshops.' }, { step: '2', title: 'Preview the line‑up', desc: 'We will announce dates, syllabi, and pricing to waitlisters first.' }, { step: '3', title: 'Secure your seat', desc: 'Early access and mentorship pairing for the first cohorts.' }].map((s) => (
              <div key={s.step} className="rounded-2xl bg-white border p-6" style={{ borderColor: BRAND.accent }}>
                <div className="h-8 w-8 rounded-full text-white flex items-center justify-center text-sm font-semibold" style={{ backgroundColor: BRAND.primary }}>{s.step}</div>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship (polished) */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: BRAND.primary }}>Mentorship, built in</h2>
            <p className="mt-2 text-slate-600">Beyond workshops, we pair practitioners with experienced mentors for guidance on projects, careers, and leadership.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="rounded-xl border p-3" style={{ borderColor: BRAND.accent }}>Breaking into Learning Design</li>
              <li className="rounded-xl border p-3" style={{ borderColor: BRAND.accent }}>Growing as a Learning Leader</li>
              <li className="rounded-xl border p-3" style={{ borderColor: BRAND.accent }}>Managing Projects and Stakeholders</li>
              <li className="rounded-xl border p-3" style={{ borderColor: BRAND.accent }}>Going Out on Your Own</li>
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-3xl border p-6" style={{ borderColor: BRAND.accent, backgroundColor: '#fff' }}>
              <h3 className="font-medium" style={{ color: BRAND.primary }}>Early access benefits</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Priority seat selection</li>
                <li>Mentor pairing preferences</li>
                <li>Workshop preview & feedback</li>
              </ul>
              <a href="#waitlist" className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm text-slate-900" style={{ backgroundColor: BRAND.accent }}>
                Join the waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (polished) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold" style={{ color: BRAND.primary }}>FAQ</h2>
            <p className="mt-2 text-slate-600">Just a few short answers while we&aposre in pre‑launch.  Have a different question? <a className="hover:text-slate-900" href="mailto:vicky@echtus.com#">Ask us!</a></p>
          </div>
          <div className="space-y-2">
            <FAQ q="When do workshops start?" a={"We're scheduling first cohorts now. Waitlisters will get discounted early access."}/>
            <FAQ q="Will there be more topics covered?" a="Yes! Future workshops will cover all aspects of learning design, from operations to strategic leadership. Let us know what you're looking for when you join the waitlist." />
            <FAQ q="How much will it cost?" a={"Workshops will be individually priced by each instructor, but we're aiming to have something for every budget. You'll see pricing per workshop once registration opens."} />
            <FAQ q="What about memberships?" a="Memberships are coming soon! Members will have early access to discounted registration, as well as priority mentorship. Membership is not required for workshop registration." />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="mx-auto max-w-7xl px-6 pb-35">
        <div className="rounded-3xl p-8 text-white" style={{ backgroundColor: BRAND.dark}}>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-semibold">Be first in line</h2>
              <p className="mt-2 text-white/80">Join the waitlist to preview the line‑up, vote on topics, and get priority access to mentorship.</p>
            </div>
            <div className="md:col-span-5">
              <WaitlistForm endpoint={WAITLIST_ENDPOINT} theme="light" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Institute of Learning Design is operated by Echtus, LLC.</p>
          <div className="flex items-center gap-5">
            <a className="hover:text-slate-900" href="https://www.echtus.com/privacy-policy">Privacy Policy</a>
            <a className="hover:text-slate-900" href="https://www.echtus.com/">Echtus, LLC</a>
            <a className="hover:text-slate-900" href="mailto:vicky@echtus.com#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ===== Helper Components =====
function HeroCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border p-6 text-white" style={{ backgroundColor: "#ffffff10", borderColor: "#ffffff20" }}>
      <h3 className="text-lg font-medium">Practical • Business‑focused • Expert‑led</h3>
      <p className="mt-2 text-sm text-white/90">Our approach blends theory with actionable strategies that meet the demands of corporate environments. Learn it today, use it tomorrow. </p>
    </div>
  );
}

function WaitlistForm({ endpoint, theme = "dark" }: { endpoint: string; theme?: "dark" | "light" }) {
  const [state, setState] = useState({ name: "", email: "", interest: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("Request failed");
      setOk(true);
      setState({ name: "", email: "", interest: "", role: "" });
   } catch {
    setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const btnStyle = theme === 'dark'
    ? { backgroundColor: '#ffffff', color: BRAND.dark }
    : { backgroundColor: BRAND.primary, color: '#ffffff' };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-2xl border p-3 sm:p-4 bg-white text-slate-900" aria-label="Join the ILD waitlist" style={{ borderColor: BRAND.accent }}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" required placeholder="Full name" className="flex-1 rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-500" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} />
        <input type="email" required placeholder="Work email" className="flex-1 rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-500" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} />
      </div>
      <div className="mt-3 grid sm:grid-cols-2 gap-3">
        <input type="text" placeholder="Your role" className="rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-500" value={state.role} onChange={(e) => setState({ ...state, role: e.target.value })} />
        <input type="text" placeholder="Topics you want" className="rounded-xl border px-4 py-3 text-slate-900 placeholder:text-slate-500" value={state.interest} onChange={(e) => setState({ ...state, interest: e.target.value })} />
      </div>
      <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium shadow-sm hover:opacity-95 disabled:opacity-60" style={btnStyle} disabled={loading}>
        {loading ? "Joining…" : ok ? "You're on the list!" : "Join the waitlist"}
      </button>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  );
}

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group rounded-3xl border overflow-hidden bg-white" style={{ borderColor: '#e5e7eb' }}>
      <div className="relative aspect-[4/3] overflow-hidden">
  <Image
    src={instructor.headshot}
    alt={instructor.name}
    fill
    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
    className="object-cover"
  />
</div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {instructor.tags?.map((t: string) => (
            <span key={t} className="inline-flex items-center rounded-full px-2.5 py-1 text-xs" style={{ backgroundColor: '#f1f5f9', color: '#334155' }}>{t}</span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">{instructor.name}</h3>
        <p className="text-sm text-slate-600">{instructor.title}</p>
        <p className="mt-2 text-sm text-slate-700">{instructor.bio}</p>

        <div className="mt-4 rounded-2xl border" style={{ borderColor: '#e5e7eb' }}>
          <div className="flex items-center justify-between px-4 py-3">
            <h4 className="font-medium">Upcoming workshop</h4>
            <button
  type="button"
  onClick={() => setOpen((v) => !v)}
  className="text-sm font-medium cursor-pointer underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3dc2ec] transition"
  style={{ color: BRAND.primary }}
  aria-expanded={open}
  aria-controls={`workshops-${instructor.id}`}
>
  {open ? "Hide" : "View"}
</button>
          </div>
          {open && (
            <ul id={`workshops-${instructor.id}`} className="divide-y" style={{ borderColor: '#e5e7eb' }}>
              {instructor.workshops.map((w: Workshop) => (
                <li key={w.id} className="px-4 py-3 text-sm">
  <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 items-start">
    {/* Left: title + meta */}
    <div>
      <p className="font-medium text-slate-900">{w.title}</p>
    </div>

    {/* Right: button */}
    <div>
      <ExpressInterest instructor={instructor.name} workshop={w.title} />
    </div>

    {/* Full-width: description wraps under both */}
    {w.desc && (
      <p className="col-span-2 mt-1 text-slate-700 break-words">
        {w.desc}
      </p>
    )}
  </div>
</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

function ExpressInterest({ instructor, workshop }: { instructor: string; workshop: string }) {
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function ping() {
    setLoading(true);
    try {
      const r = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "interest",
          instructor,
          workshop,
          page: typeof window !== "undefined" ? window.location.href : "",
          ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        console.error("Interest failed:", data);
        alert("Sorry—couldn't notify. Check the console for details.");
        return;
      }
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={ping}
      disabled={loading || done}
      className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium shadow-sm text-white"
      style={{ backgroundColor: done ? "#10b981" : "#111827" }}
    >
      {done ? "Noted!" : loading ? "Sending…" : "I'm interested"}
    </button>
  );
}


function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl p-4 shadow-sm transition"
         style={{ backgroundColor: BRAND.dark }}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="w-full text-left text-white cursor-pointer
                   focus:outline-none focus-visible:ring-2
                   focus-visible:ring-offset-2 focus-visible:ring-[#3dc2ec]"
        aria-expanded={open}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium">{q}</span>
          <span className="opacity-90">{open ? '–' : '+'}</span>
        </div>
      </button>
      {open && <p className="mt-3 text-sm text-white/90">{a}</p>}
    </div>
  );
}
