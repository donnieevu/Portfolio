import Link from "next/link";
import { Mail, Linkedin, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageWithModal } from "@/components/image-with-modal";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";
import FullscreenProjectImage from "@/components/fullscreen-project-image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex flex-wrap items-center justify-between px-4 sm:px-6 h-auto py-3">
          <div className="flex-1 min-w-0">
            <Link href="/" className="font-bold text-xl whitespace-nowrap">
              Donald Vu
            </Link>
          </div>
          <nav className="hidden sm:flex items-center gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline"
            >
              Experience
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="#certifications"
              className="text-sm font-medium hover:underline"
            >
              Certifications
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium hover:underline"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline"
            >
              Contact
            </Link>
            <ThemeToggle />
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-14">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-10 px-4 sm:px-6">
          <div className="flex-1 space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Donald Vu</span>
            </h1>
            <p className="mt-3 text-lg md:text-xl text-muted-foreground leading-snug">
              Application Support Engineer — production reliability & verified
              fixes
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Nginx",
                "Docker",
                "Linux",
                "Grafana/Prometheus",
                "SQL",
                "Python",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-full border bg-background px-3 py-1 text-sm text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dallas, TX</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>donaldhdvu@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="/resume/Donald-Vu-Resume.pdf"
                  download
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://linkedin.com/in/donaldvu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:donaldhdvu@gmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-auto flex items-center justify-center">
            <ImageWithModal
              src="/images/headshot-dv.png"
              alt="Donald Vu"
              rounded
              className="flex items-center justify-center w-full h-[320px] overflow-hidden"
              imageClassName="object-cover object-[center_20%] w-full h-auto pt-20"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          {/* 1 column on mobile, 2 columns on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Application Support Engineer Projects Card */}
            <div className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <Link
                    href="/projects/ase-projects"
                    className="hover:underline"
                  >
                    Application Support Engineer Projects
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Incident-driven labs: Nginx ↔ Flask ↔ Postgres, Loki/Grafana
                  dashboards, runbooks, and post-incident reports showcasing
                  triage & reliability skills.
                </p>
              </div>
            </div>

            {/* Data & Operations Analyst Projects Card */}
            <div className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  <Link
                    href="/projects/data-analyst-projects"
                    className="hover:underline"
                  >
                    Data &amp; Operations Analyst Projects
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dashboards, automation tools, and SQL-based workflows built to
                  optimize operations and enhance data visibility.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills &amp; Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Application Support & Troubleshooting */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Application Support &amp; Troubleshooting
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600 text-white">
                    Incident Triage
                  </Badge>
                  <Badge className="bg-blue-600 text-white">
                    Root Cause Analysis
                  </Badge>
                  <Badge className="bg-blue-600 text-white">Log Analysis</Badge>
                  <Badge className="bg-blue-600 text-white">
                    Nginx (Reverse Proxy)
                  </Badge>
                  <Badge className="bg-blue-600 text-white">
                    Docker &amp; Docker Compose
                  </Badge>
                  <Badge className="bg-blue-600 text-white">
                    Ticketing (Jira)
                  </Badge>
                  <Badge className="bg-blue-600 text-white">Linux (WSL2)</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Monitoring & Observability */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Monitoring &amp; Observability
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600 text-white">Grafana</Badge>
                  <Badge className="bg-green-600 text-white">Loki</Badge>
                  <Badge className="bg-green-600 text-white">
                    Promtail / LogQL
                  </Badge>
                  <Badge className="bg-green-600 text-white">
                    Splunk / SIEM
                  </Badge>
                  <Badge className="bg-green-600 text-white">
                    Tableau &amp; Power BI (KPI)
                  </Badge>
                  <Badge className="bg-green-600 text-white">
                    Metric Validation &amp; Reporting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Scripting & Automation */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Scripting &amp; Automation
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600 text-white">Python</Badge>
                  <Badge className="bg-purple-600 text-white">
                    SQL (BigQuery, MySQL)
                  </Badge>
                  <Badge className="bg-purple-600 text-white">
                    psql (PostgreSQL CLI)
                  </Badge>
                  <Badge className="bg-purple-600 text-white">Bash</Badge>
                  <Badge className="bg-purple-600 text-white">PowerShell</Badge>
                  <Badge className="bg-purple-600 text-white">Excel VBA</Badge>
                  <Badge className="bg-purple-600 text-white">
                    Workflow Automation
                  </Badge>
                  <Badge className="bg-purple-600 text-white">Git</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Communication & Documentation */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Communication &amp; Documentation
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-600 text-white">
                    Runbooks &amp; Knowledge Base
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Technical Documentation
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Cross-Functional Collaboration
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Customer Support
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Incident Reports / RCA Notes
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Analyst</h3>
                    <p className="text-primary">CoreLogic</p>
                  </div>
                  <div className="text-muted-foreground text-right min-w-[180px] md:ml-auto">
                    <p>Irving, TX</p>
                    <p>December 2023 - May 2025</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Implemented automated reporting pipelines using SQL
                    (BigQuery), Python, and Excel VBA, saving 2+ hours per
                    request and reducing inefficiencies by 40%.
                  </li>
                  <li>
                    Optimized data extraction and email delivery processes,
                    reducing manual workload by 30% and improving data delivery
                    consistency.
                  </li>
                  <li>
                    Collaborated with internal operations teams on onboarding
                    and rollout of reporting tools, contributing to a 20%
                    increase in SLA compliance.
                  </li>
                  <li>
                    Created Tableau dashboards to support cross-functional
                    visibility of client servicing timelines and data requests.
                  </li>
                  <li>
                    Utilized CTEs with window functions—such as COUNT() and
                    ROW_NUMBER()—alongside CASE statements to clean and segment
                    datasets for analysis.
                  </li>
                  <li>
                    Authored internal documentation and supported stakeholder
                    training, resulting in a 98% on-time delivery rate and
                    improved team adoption.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      Business Operations Analyst
                    </h3>
                    <p className="text-primary">CoreLogic</p>
                  </div>
                  <div className="text-muted-foreground text-right min-w-[180px] md:ml-auto">
                    <p>Irving, TX</p>
                    <p>August 2021 - December 2023</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Served as Subject Matter Expert for the Service Transfer
                    Process, overseeing accurate onboarding and data migration
                    of new client accounts.
                  </li>
                  <li>
                    Led new hire training and documentation efforts to
                    accelerate internal workflow adoption.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to coordinate data
                    integration efforts and system alignment.
                  </li>
                  <li>
                    Created operational reports to support internal performance
                    monitoring and compliance reviews.
                  </li>
                  <li>
                    Identified process inefficiencies and implemented
                    improvements that reduced turnaround times.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-primary">Infosys</p>
                  </div>
                  <div className="text-muted-foreground text-right min-w-[180px] md:ml-auto">
                    <p>Richardson, TX</p>
                    <p>June 2019 - June 2020</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Participated in Agile software development and contributed
                    to a web application project through UI enhancements and
                    feature development.
                  </li>
                  <li>
                    Engaged in sprint planning, team standups, and
                    retrospectives as part of the product team.
                  </li>
                  <li>
                    Collaborated with the development team to implement a
                    dynamic shopping cart feature for an internal web
                    application, focusing on user interface enhancements and
                    optimizing responsiveness within an Agile environment.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Security+ Application Support Engineer (pivot from data/ops). I
              focus on production reliability: reproduce issues, read
              logs/metrics, restore service quickly, and document runbooks so
              fixes are repeatable. In my labs, I practice the loop of triage →
              isolate with logs/metrics → safe rollback → verification. I like
              clear, plain-English communication and I’m building the habits
              I’ll use on an on-call team.
            </p>
            <p className="text-lg">
              Stack: Nginx, Docker, Linux, Grafana/Prometheus, SQL, Python.
            </p>
            <p className="text-lg">
              Off-hours: basketball/NBA, gym, anime & thrillers, occasional
              Valorant.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">CompTIA Security+</h3>
                  <p className="text-primary">Earned July 2025</p>
                </div>
                <div>
                  <a
                    href="/images/Donald_Vu_SecurityPlus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-right"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Bachelor of Science in Management Information Systems
                  </h3>
                  <p className="text-primary">
                    University of Texas at Arlington
                  </p>
                </div>
                <div className="text-muted-foreground">
                  <p>Arlington, TX</p>
                  <p>GPA: 3.56</p>
                </div>
              </div>
              <p>
                <strong>Organizations/Awards:</strong> Sports Coordinator for
                Filipino Student Association (FSA), Dean's List
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-14 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-lg">
                I'm always open to discussing new opportunities, potential
                growth, or just connecting with fellow professionals in the
                field. Feel free to reach out through any of the channels below!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:donaldhdvu@gmail.com"
                    className="hover:underline"
                  >
                    donaldhdvu@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <a
                    href="https://linkedin.com/in/donaldvu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/donaldvu
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Job Opportunity, Interview Request, or Other Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Donald Vu. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://linkedin.com/in/donaldvu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:donaldhdvu@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
