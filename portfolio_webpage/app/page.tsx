import Link from "next/link"
import { Mail, Linkedin, FileText, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Link href="/">Donald Vu</Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline">
              Experience
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container py-10 md:py-16">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Donald Vu</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Data and Operations Specialist with expertise in SQL-based analytics, process automation, and dashboard
              reporting.
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
                <a href="#" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://linkedin.com/in/donaldvu" target="_blank" rel="noopener noreferrer">
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
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/images/donald-headshot.png"
                alt="Donald Vu"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-4">
            <p className="text-lg">
              I'm a Data and Operations Specialist with experience in SQL-based analytics, process automation, and
              dashboard reporting. I'm skilled in implementing workflows that support cross-functional teams, internal
              onboarding, and data delivery using SQL, Python, Tableau, and Excel VBA.
            </p>
            <p className="text-lg">
              I have a proven ability to develop tools and reporting processes that streamline operations and reduce
              manual effort. I'm comfortable working across technical and non-technical stakeholders to meet data
              requirements and enable decision-making.
            </p>
            <p className="text-lg">
              When I'm not working, I enjoy basketball, following the NBA, focusing on health & wellness, playing video
              games (especially Marvel Rivals), watching anime, and enjoying psychological/thriller movies.
            </p>
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
                      CTEs, joins, filtering logic, KPI calculations, and complex query optimization
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">GCP/BigQuery</h3>
                    <p className="text-muted-foreground">
                      Cloud-based SQL querying for healthcare data analysis, connected to DBVisualizer for local
                      exploration
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Python</h3>
                    <p className="text-muted-foreground">
                      Data cleaning with pandas, Excel file automation, and process monitoring scripts
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Tableau</h3>
                    <p className="text-muted-foreground">
                      Trend analysis, KPI dashboards, interactive visualizations, and data storytelling
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Excel/VBA</h3>
                    <p className="text-muted-foreground">
                      Automated pipelines, report generation macros, and user-friendly interfaces
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Git</h3>
                    <p className="text-muted-foreground">
                      Version control and publishing portfolio projects to GitHub for sharing and presentation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Soft Skills</h3>
                <p className="text-muted-foreground">
                  Strong communicator, problem solver, and ability to translate technical concepts for non-technical
                  audiences
                </p>
              </div>
            </div>
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
                  <div className="text-muted-foreground">
                    <p>Irving, TX</p>
                    <p>December 2023 - Present</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Implemented automated reporting pipelines using SQL (BigQuery), Python, and Excel VBA, saving 2+
                    hours per request and reducing inefficiencies by 40%.
                  </li>
                  <li>
                    Optimized data extraction and email delivery processes, reducing manual workload by 30% and
                    improving data delivery consistency.
                  </li>
                  <li>
                    Collaborated with internal operations teams on onboarding and rollout of reporting tools,
                    contributing to a 20% increase in SLA compliance.
                  </li>
                  <li>
                    Created Tableau dashboards to support cross-functional visibility of client servicing timelines and
                    data requests.
                  </li>
                  <li>
                    Utilized CTEs with window functions—such as COUNT() and ROW_NUMBER()—alongside CASE statements to
                    clean and segment datasets for analysis.
                  </li>
                  <li>
                    Authored internal documentation and supported stakeholder training, resulting in a 98% on-time
                    delivery rate and improved team adoption.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Business Operations Analyst</h3>
                    <p className="text-primary">CoreLogic</p>
                  </div>
                  <div className="text-muted-foreground">
                    <p>Irving, TX</p>
                    <p>August 2021 - December 2023</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Served as Subject Matter Expert for the Service Transfer Process, overseeing accurate onboarding and
                    data migration of new client accounts.
                  </li>
                  <li>Led new hire training and documentation efforts to accelerate internal workflow adoption.</li>
                  <li>
                    Collaborated with cross-functional teams to coordinate data integration efforts and system
                    alignment.
                  </li>
                  <li>
                    Created operational reports to support internal performance monitoring and compliance reviews.
                  </li>
                  <li>Identified process inefficiencies and implemented improvements that reduced turnaround times.</li>
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
                  <div className="text-muted-foreground">
                    <p>Richardson, TX</p>
                    <p>June 2019 - June 2020</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Participated in Agile software development and contributed to a web application project through UI
                    enhancements and feature development.
                  </li>
                  <li>Engaged in sprint planning, team standups, and retrospectives as part of the product team.</li>
                  <li>
                    Collaborated with the development team to implement a dynamic shopping cart feature for an internal
                    web application, focusing on user interface enhancements and optimizing responsiveness within an
                    Agile environment.
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
                  <h3 className="text-xl font-bold">Bachelor of Science in Management in Information Systems</h3>
                  <p className="text-primary">University of Texas at Arlington</p>
                </div>
                <div className="text-muted-foreground">
                  <p>Arlington, TX</p>
                  <p>GPA: 3.56</p>
                </div>
              </div>
              <p>
                <strong>Organizations/Awards:</strong> Sports Coordinator for Filipino Student Association (FSA), Dean's
                List
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Data Analysis & Querying</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>SQL (BigQuery)</Badge>
                  <Badge>SQL (MySQL)</Badge>
                  <Badge>Python</Badge>
                  <Badge>pandas</Badge>
                  <Badge>Excel VBA</Badge>
                  <Badge>Git</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Visualization & Reporting</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tableau</Badge>
                  <Badge>Excel dashboards</Badge>
                  <Badge>KPI tracking</Badge>
                  <Badge>Data visualization</Badge>
                  <Badge>Report creation</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Automation & Optimization</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Workflow automation</Badge>
                  <Badge>Process optimization</Badge>
                  <Badge>Report creation</Badge>
                  <Badge>Email scheduling</Badge>
                  <Badge>Data pipelines</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Cross-functional Collaboration</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Cross-function onboarding</Badge>
                  <Badge>Training</Badge>
                  <Badge>Stakeholder engagement</Badge>
                  <Badge>Documentation</Badge>
                  <Badge>Team coordination</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-12">
            {/* Excel-Macro Automated Reporting Tool */}
            <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Excel-Macro Automated Reporting Tool</h3>
                  <p className="text-muted-foreground mb-4">
                    End-to-end automation solution that streamlines data cleaning, validation, SQL job execution, and
                    report generation with automated email notifications.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Python watchdog script that monitors folders for new source files</li>
                        <li>Automated data validation and cleaning with pandas DataFrame</li>
                        <li>BigQuery SQL execution for data extraction and SLA evaluation</li>
                        <li>User-friendly Excel UI for non-technical users</li>
                        <li>Automated email delivery with error handling</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Excel VBA</Badge>
                        <Badge variant="secondary">Python</Badge>
                        <Badge variant="secondary">pandas</Badge>
                        <Badge variant="secondary">SQL (BigQuery)</Badge>
                        <Badge variant="secondary">Automation</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced manual workload by 40%</li>
                        <li>Improved data delivery consistency</li>
                        <li>Eliminated manual cleanup, renaming, and emailing tasks</li>
                        <li>Now used by operations teams with no coding required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-1-overview.png"
                          alt="Excel-Macro Automated Reporting Tool Overview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Project Overview</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-2-ui.png"
                          alt="User Interface & Entry Point"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">User Interface & Entry Point</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-3-file-sweep.png"
                          alt="Automated File Sweep"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Automated File Sweep</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-4-python.png"
                          alt="Python Script - File Validation & Cleanup"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Python Validation Script</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-5-sql-pt1.png"
                          alt="SQL Logic - SLA Classification Part 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">SQL SLA Classification Pt 1</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-6-sql-pt2.png"
                          alt="SQL Logic - SLA Classification Part 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">SQL SLA Classification Pt 2</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-7-auatomated-email.png"
                          alt="Automated Email Delivery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Automated Email Delivery</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/macro-8-takeaways.png"
                          alt="Excel-Macro Tool Takeaways"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Project Takeaways</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consumer Complaint Dashboard */}
            <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Consumer Complaint Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive dashboard that analyzes consumer complaints by agency and category, with normalized
                    metrics to enable fair comparisons regardless of agency size.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Normalized complaint volume using total contract count for fair agency comparison</li>
                        <li>SQL joins and CTEs to combine complaint data with agency information</li>
                        <li>Interactive Tableau dashboards with filtering capabilities</li>
                        <li>Complaint reason breakdown to identify service issues</li>
                        <li>Color formatting to highlight agencies with elevated complaint rates</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">SQL (BigQuery)</Badge>
                        <Badge variant="secondary">Tableau</Badge>
                        <Badge variant="secondary">Data Visualization</Badge>
                        <Badge variant="secondary">KPI Development</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enabled fair comparison across agencies regardless of size</li>
                        <li>Identified service breakdowns by complaint category and agency</li>
                        <li>Improved SQL fluency through CTEs, joins, and row-ranking</li>
                        <li>Created actionable insights for operational improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-1-dashboard-overview.png"
                          alt="Consumer Complaint Dashboard Overview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Dashboard Overview</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-2-agency-query.png"
                          alt="Agency Query"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Agency Join Query</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-3-total-contract-query.png"
                          alt="Total Contract Query"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Total Contract Query</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-4-per-10k-dashboard.png"
                          alt="Complaints Per 10K Contracts Dashboard"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Complaints Per 10K Contracts</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-5-reason-breakdown-dashboard.png"
                          alt="Complaint Reason Breakdown Dashboard"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Complaint Reason Breakdown</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/consumerComplaint-6-dashboard-takeaways.png"
                          alt="Dashboard Takeaways"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Project Takeaways</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthcare Dashboard */}
            <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">Healthcare Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Data visualization project analyzing hospital readmission trends by diagnosis, treatment, and
                    patient demographics to identify high-risk groups and improve care outcomes.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Analysis of readmission rates by length of hospital stay</li>
                        <li>Identification of high-risk age groups and diagnoses</li>
                        <li>Evaluation of A1C test results to assess diabetes management</li>
                        <li>Interactive filters for age, diagnosis, and emergency visits</li>
                        <li>Reference lines to highlight averages across all stay durations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Tableau</Badge>
                        <Badge variant="secondary">SQL</Badge>
                        <Badge variant="secondary">Data Visualization</Badge>
                        <Badge variant="secondary">Healthcare Analytics</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Identified 7-9 day stays had highest readmission rate at 51%</li>
                        <li>Discovered patients without A1C testing had 47% readmission rate</li>
                        <li>Found older age groups (70-90) had highest readmission rates</li>
                        <li>Highlighted top diagnoses with highest readmission numbers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-4 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/healthcare-1-overview.png"
                          alt="Healthcare Dashboard Overview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Dashboard Overview</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/healthcare-2-dashboard-1.png"
                          alt="Readmission Trends by Diagnosis & Age"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Readmission by Diagnosis & Age</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/healthcare-3-dashboard-2.png"
                          alt="Readmission Trends by Treatment & Hospital Stay"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Readmission by Treatment & Stay</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-card rounded-md overflow-hidden border">
                      <div className="aspect-video relative">
                        <img
                          src="/images/healthcare-4-takeaways.png"
                          alt="Healthcare Dashboard Takeaways"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2 text-xs text-center">Project Takeaways</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p className="text-lg">
                I'm always open to discussing new opportunities, data projects, or just connecting with fellow
                professionals in the field. Feel free to reach out through any of the channels below!
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:donaldhdvu@gmail.com" className="hover:underline">
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
          <p className="text-center md:text-left">© {new Date().getFullYear()} Donald Vu. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/donaldvu" target="_blank" rel="noopener noreferrer">
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
  )
}
