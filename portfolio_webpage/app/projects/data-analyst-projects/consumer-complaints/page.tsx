import { Badge } from "@/components/ui/badge";
import FullscreenProjectGallery from "@/components/fullscreen-project-gallery";
import Link from "next/link";

const images = [
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-1-dashboard-overview.png",
    alt: "Dashboard Overview",
    caption: "Dashboard Overview",
  },
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-2-agency-query.png",
    alt: "Agency Join Query",
    caption: "Agency Join Query",
  },
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-3-total-contract-query.png",
    alt: "Total Contract Query",
    caption: "Total Contract Query",
  },
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-4-per-10k-dashboard.png",
    alt: "Complaints Per 10K",
    caption: "Complaints Per 10K Contracts",
  },
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-5-reason-breakdown-dashboard.png",
    alt: "Complaint Reasons",
    caption: "Complaint Reason Breakdown",
  },
  {
    src: "/images/data-analyst-projects/consumerComplaint/consumerComplaint-6-dashboard-takeaways.png",
    alt: "Takeaways",
    caption: "Project Takeaways",
  },
];

export default function ConsumerComplaintProjectPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-10">
      <div className="relative mb-10">
        <Link
          href="/projects/data-analyst-projects"
          className="absolute left-0 text-sm text-blue-500 hover:underline"
        >
          ← Back to Projects
        </Link>
        <h1 className="text-3xl font-bold text-center">
          Consumer Complaint Dashboard
        </h1>
      </div>

      <p className="text-muted-foreground text-lg">
        Interactive dashboard that analyzes consumer complaints by agency and
        category, with normalized metrics to enable fair comparisons regardless
        of agency size.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Normalized complaint volume using total contract count for fair
              agency comparison
            </li>
            <li>
              SQL joins and CTEs to combine complaint data with agency
              information
            </li>
            <li>Interactive Tableau dashboards with filtering capabilities</li>
            <li>Complaint reason breakdown to identify service issues</li>
            <li>
              Color formatting to highlight agencies with elevated complaint
              rates
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SQL (BigQuery)</Badge>
            <Badge variant="secondary">Tableau</Badge>
            <Badge variant="secondary">Data Visualization</Badge>
            <Badge variant="secondary">KPI Development</Badge>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Enabled fair comparison across agencies regardless of size</li>
            <li>
              Identified service breakdowns by complaint category and agency
            </li>
            <li>Improved SQL fluency through CTEs, joins, and row-ranking</li>
            <li>Created actionable insights for operational improvements</li>
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
