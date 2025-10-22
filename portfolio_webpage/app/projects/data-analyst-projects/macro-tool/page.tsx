import { Badge } from "@/components/ui/badge";
import FullscreenProjectGallery from "@/components/fullscreen-project-gallery";
import Link from "next/link";

export default function MacroToolProjectPage() {
  const images = [
    {
      src: "/images/data-analyst-projects/macro/macro-1-overview.png",
      alt: "Project Overview",
      caption: "Project Overview",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-2-ui.png",
      alt: "User Interface",
      caption: "UI & Entry Point",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-3-file-sweep.png",
      alt: "File Sweep",
      caption: "Automated File Sweep",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-4-python.png",
      alt: "Python Script",
      caption: "Validation Script",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-5-sql-pt1.png",
      alt: "SQL Logic 1",
      caption: "SQL Classification Pt 1",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-6-sql-pt2.png",
      alt: "SQL Logic 2",
      caption: "SQL Classification Pt 2",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-7-automated-email.png",
      alt: "Email",
      caption: "Email Automation",
    },
    {
      src: "/images/data-analyst-projects/macro/macro-8-takeaways.png",
      alt: "Takeaways",
      caption: "Project Takeaways",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-10">
      <div className="relative mb-10">
        <Link
          href="/projects/data-analyst-projects/"
          className="absolute left-0 text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Excel-Macro Automated Reporting Tool
        </h1>
      </div>

      <p className="text-muted-foreground text-lg">
        End-to-end automation solution that streamlines data cleaning,
        validation, SQL job execution, and report generation with automated
        email notifications.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Python watchdog script that monitors folders for new source files
            </li>
            <li>
              Automated data validation and cleaning with pandas DataFrame
            </li>
            <li>
              BigQuery SQL execution for data extraction and SLA evaluation
            </li>
            <li>User-friendly Excel UI for non-technical users</li>
            <li>Automated email delivery with error handling</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Excel VBA</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">pandas</Badge>
            <Badge variant="secondary">SQL (BigQuery)</Badge>
            <Badge variant="secondary">Automation</Badge>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Reduced manual workload by 40%</li>
            <li>Improved data delivery consistency</li>
            <li>Eliminated manual cleanup, renaming, and emailing tasks</li>
            <li>Now used by operations teams with no coding required</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {images.map((img, i) => (
          <FullscreenProjectGallery
            key={img.src}
            images={images}
            startIndex={i}
          />
        ))}
      </div>
    </div>
  );
}
