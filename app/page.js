"use client"
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link as LinkIcon, Download, Moon, Sun, CheckCircle2 } from "lucide-react";

// --------- EDITABLE PROFILE DATA ---------
const profile = {
  name: "Jericho Louixe Pascua",
  role: "IT Support Specialist",
  blurb:
    "IT Support Specialist with 3 years of experience Managing networks using Fortinet Firewall/Ubiquiti Server, troubleshooting hardware/software, administering Active Directory and Google Workspace, and keeping users productive.",
  location: "Philippines",
  email: "jerichopascua1706@gmail.com",
  phone: "+63 956 864 0766",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jericho-louixe-pascua-264396222" },
    { label: "GitHub", href: "https://github.com/Opensesam33" },
  ],
  skills: [
    "Technical Support (L1/L2)",
    "Hardware/Software Troubleshooting",
    "Windows 10/11, macOS",
    "Active Directory (Users, GPO)",
    "Google Workspace Admin",
    "Networking (LAN/WAN,VLANs)",
    "Routers/Switches/\nFirewall Basics",
    "Ticketing Systems (JIRA)",
    "PowerShell & Batch Scripting Basics",
    "IT Asset Management",
    "Backup & DR Basics",
  ],
  experience: [
    {
      title: "IT Support Specialist",
      company: "TDH International Inc.",
      location: "Makati City, Manila (Onsite)",
      dates: "June 2024 – Present",
      bullets: [
        "Resolved L1/L2 tickets for 200+ users",
        "Administered Active Directory: user lifecycle, groups, OU/GPO hygiene.",
        "Managed Google Workspace: provisioning, policies, 2SV, routing, security.",
        "Monitoring and Configuration of Network connection using Fortinet Firewall/Ubiquiti Web Server.",
        "Remote Support or In-person Troubleshooting.",
        "IT Asset Management.",
        "Procurement of devices.",
      ],
    },
    {
      title: "IT Support Specialist",
      company: "Fast Services Corporation",
      location: "Alabang Muntinlupa",
      dates: "Apr 2023 – Apr 2024",
      bullets: [
        "Field/On-call IT Support handling 4 different sites.",
        "Responded to the users inquiries over the phone and in-person and remote.",
        "Used an in-house ticketing system called OS Ticket.",
        "Managing the warehouses network connections.",
        "Monitoring of Network connection via Fortinet Firewall.",
      ],
    },
  ],
  projects: [
    {
      name: "Implementaion of Active Directory",
      summary:
        "Implemented Active Directory on Windows Server 2019 using an HPE ProLiant server.",
      stack: ["Network Authentication", "Accounts", "Monitoring"],
    },
    {
      name: "Automated the process of uploading videos using OBS and Google Drive.",
      summary:
        "Developed an automated workflow for uploading videos from OBS to Google Drive.",
      stack: ["Google Workspace", "PowerShell Scripting"],
    },
  ],
  certificates: [
    { name: "Computer Networking", year: "(In progress)" },
    { name: "Digital Security Fundamentals", year: "2025" },
    { name: "EF SET English Proficient C2", year: "2025" },
  ],
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Cavite State University",
    year: "2020",
  },
  highlights: [
    "3+ years IT support experience",
    "200+ endpoints supported",
    "Initial Implementation of Active Directory Windows Server 2019",
  ],
};

// --------- COMPONENTS ---------
const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6 shadow-sm bg-white/60 backdrop-blur dark:bg-zinc-900/60">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border shadow-sm p-5 bg-white/80 dark:bg-zinc-900/70 ${className}`}>{children}</div>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const variants = useMemo(
    () => ({ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-slate-100 text-zinc-800 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100">
      {/* Top Nav */}
      <div className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="flex items-center gap-4 text-sm">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Certifications", "certs"],
              ["Education", "education"],
              ["Contact", "contact"],
            ].map(([label, href]) => (
              <a key={href} href={`#${href}`} className="hover:underline underline-offset-4">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm shadow-sm hover:shadow transition-all"
            >
              <Download className="w-4 h-4" /> <span className="hidden sm:inline">Save as PDF</span>
            </button>
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm shadow-sm hover:shadow transition-all"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Header / Hero */}
      <header className="max-w-5xl mx-auto px-4 pt-10 pb-6 print:pt-0">
        <motion.div
          initial="hidden"
          animate="show"
          variants={variants}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-start"
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300">
              {profile.role} · Networking · Active Directory · Google Workspace
            </p>
            <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">
              {profile.blurb}
            </p>

            <div className="flex flex-wrap gap-2">
              {profile.highlights.map((h) => (
                <Badge key={h}>
                  <CheckCircle2 className="w-4 h-4 mr-1.5" /> {h}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="md:ml-auto w-full">
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {profile.location}
              </div>
              <a className="flex items-center gap-2 hover:underline" href={`mailto:${profile.email}`}>
                <Mail className="w-4 h-4" /> {profile.email}
              </a>
              <a className="flex items-center gap-2 hover:underline" href={`tel:${profile.phone}`}>
                <Phone className="w-4 h-4" /> {profile.phone}
              </a>
              {profile.links.map((l) => (
                <a key={l.href} className="flex items-center gap-2 hover:underline" href={l.href} target="_blank" rel="noreferrer">
                  <LinkIcon className="w-4 h-4" /> {l.label}
                </a>
              ))}
            </div>
          </Card>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-16 print:pb-0">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-8">
            <Section id="about" title="About Me">
              <Card>
                <p>
                  I help teams stay productive by solving technical issues fast, keeping
                  endpoints healthy, and maintaining clean, well‑documented systems. I enjoy
                  building small automations, writing clear user guides, and making IT feel
                  approachable.
                </p>
              </Card>
            </Section>

            <Section id="experience" title="Professional Experience">
              {profile.experience.map((job, idx) => (
                <Card key={idx}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{job.company} · {job.location} · {job.dates}</div>
                  </div>
                  <ul className="mt-3 list-disc pl-5 space-y-2">
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </Section>

            <Section id="projects" title="Key Projects">
              <div className="grid sm:grid-cols-2 gap-4">
                {profile.projects.map((p, i) => (
                  <Card key={i}>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{p.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Section>
          </div>

          <div className="space-y-8">
            <Section id="skills" title="Skills">
              <Card>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {profile.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Section>

            <Section id="certs" title="Certifications">
              <Card>
                <ul className="space-y-2 text-sm">
                  {profile.certificates.map((c) => (
                    <li key={c.name} className="flex items-center justify-between">
                      <span>{c.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-400">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Section>

            <Section id="education" title="Education">
              <Card>
                <div className="text-sm">
                  <div className="font-medium">{profile.education.degree}</div>
                  <div className="text-zinc-500 dark:text-zinc-400">{profile.education.school} · {profile.education.year}</div>
                </div>
              </Card>
            </Section>

            <Section id="contact" title="Contact">
              <Card>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> {profile.email}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> {profile.phone}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {profile.location}</div>
                  {profile.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                      <LinkIcon className="w-4 h-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </Card>
            </Section>
          </div>
        </div>
      </main>

      {/* Print styles */}
      <style>{`
        @media print {
          .sticky, nav, button { display: none !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          a { text-decoration: none; color: inherit; }
          .print\:pt-0 { padding-top: 0 !important; }
          .print\:pb-0 { padding-bottom: 0 !important; }
        }
      `}</style>
    </div>
  );
}
