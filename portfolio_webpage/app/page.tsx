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
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium hover:underline"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline"
            >
              Projects
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

      <main className="container mx-auto px-4 py-10 md:py-16">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-10 px-4 sm:px-6">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Donald Vu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Data & Operations Specialist | SQL Analytics, Dashboard Reporting,
              and Workflow Automation
            </p>
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
                  href="/resume/Donald_Vu_Resume.pdf"
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

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Security+ certified Data and Operations Analyst with 3+ years of
              experience helping teams work smarter through troubleshooting,
              automation, and clear documentation. I’m currently transitioning
              into cybersecurity to become an entry-level SOC Analyst, where I
              can build on my problem-solving skills and support organizations
              in monitoring systems, investigating alerts, and responding to
              incidents. I enjoy tackling technical challenges, working with
              people, and creating processes that keep things running smoothly
              and securely.
            </p>
            <p className="text-lg">
              I have a proven ability to develop tools and reporting processes
              that streamline operations and reduce manual effort. I'm
              comfortable working across technical and non-technical
              stakeholders to meet data requirements and enable decision-making.
              I’m building on these strengths as I move into cybersecurity,
              ready to help monitor systems and support security teams as an
              entry-level SOC Analyst.
            </p>
            <p className="text-lg">
              When I'm not working, I enjoy playing basketball, following the
              NBA, focusing on health & wellness, playing video games
              (especially Valorant), watching anime, and enjoying
              psychological/thriller movies.
            </p>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-16 scroll-mt-20">
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

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Cybersecurity Projects Card */}
            <div className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Cybersecurity Projects
                </h3>
                <p className="text-muted-foreground mb-4">
                  Blue Team labs, SOC workflows, and practical hands-on
                  exercises to showcase defensive security skills.
                </p>
              </div>
              <div className="text-right">
                <Link
                  href="/projects/cybersecurity-projects"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View Projects →
                </Link>
              </div>
            </div>

            {/* Data & Operations Analyst Projects Card */}
            <div className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Data & Operations Analyst Projects
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dashboards, automation tools, and SQL-based workflows built to
                  optimize operations and enhance data visibility.
                </p>
              </div>
              <div className="text-right">
                <Link
                  href="/projects/data-analyst-projects"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  View Projects →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Strengths Section */}
        <section id="technical-strengths" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Technical Strengths</h2>
          <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">SQL</h3>
                    <p className="text-muted-foreground">
                      CTEs, joins, filtering logic, KPI calculations, and
                      complex query optimization
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">GCP/BigQuery</h3>
                    <p className="text-muted-foreground">
                      Cloud-based SQL querying for healthcare data analysis,
                      connected to DBVisualizer for local exploration
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Python</h3>
                    <p className="text-muted-foreground">
                      Data cleaning with pandas, Excel file automation, and
                      process monitoring scripts
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Tableau/Power BI</h3>
                    <p className="text-muted-foreground">
                      Trend analysis, KPI dashboards, interactive
                      visualizations, and data storytelling
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Excel/VBA</h3>
                    <p className="text-muted-foreground">
                      Automated pipelines, report generation macros, and
                      user-friendly interfaces
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Git</h3>
                    <p className="text-muted-foreground">
                      Version control and publishing portfolio projects to
                      GitHub for sharing and presentation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Soft Skills</h3>
                <p className="text-muted-foreground">
                  Strong communicator, problem solver, and ability to translate
                  technical concepts for non-technical audiences
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Data Analysis & Querying */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Data Handling & Automation
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600 text-white">
                    SQL (BigQuery)
                  </Badge>
                  <Badge className="bg-blue-600 text-white">
                    Python (pandas)
                  </Badge>
                  <Badge className="bg-blue-600 text-white">Excel VBA</Badge>
                  <Badge className="bg-blue-600 text-white">Git</Badge>
                  <Badge className="bg-blue-600 text-white">Bash</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Visualization & Reporting */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Visualization & Reporting
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-600 text-white">Tableau</Badge>
                  <Badge className="bg-green-600 text-white">Power BI</Badge>
                  <Badge className="bg-green-600 text-white">
                    KPI tracking
                  </Badge>
                  <Badge className="bg-green-600 text-white">
                    Data visualization
                  </Badge>
                  <Badge className="bg-green-600 text-white">
                    Report creation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Automation & Optimization */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Automation & Optimization
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-600 text-white">
                    Workflow automation
                  </Badge>
                  <Badge className="bg-purple-600 text-white">
                    Process optimization
                  </Badge>
                  <Badge className="bg-purple-600 text-white">
                    Report creation
                  </Badge>
                  <Badge className="bg-purple-600 text-white">
                    Email scheduling
                  </Badge>
                  <Badge className="bg-purple-600 text-white">
                    Data pipelines
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Cross-functional Collaboration */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">
                  Cross-functional Collaboration
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-600 text-white">
                    Cross-function onboarding
                  </Badge>
                  <Badge className="bg-pink-600 text-white">Training</Badge>
                  <Badge className="bg-pink-600 text-white">
                    Stakeholder engagement
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Documentation
                  </Badge>
                  <Badge className="bg-pink-600 text-white">
                    Team coordination
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 scroll-mt-20">
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

        {/* Education Section */}
        <section id="education" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Bachelor of Science in Management in Information Systems
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
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-lg">
                I'm always open to discussing new opportunities, data projects,
                or just connecting with fellow professionals in the field. Feel
                free to reach out through any of the channels below!
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
