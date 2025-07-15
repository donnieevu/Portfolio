import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import FullscreenProjectImage from "@/components/fullscreen-project-image";

export default function DataAnalystProjects() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="relative mb-10">
        <Link
          href="/"
          className="absolute left-0 text-sm font-medium hover:underline text-white"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-center">
          Data & Operations Analyst Projects
        </h1>
      </div>

      <div className="space-y-12">
        {/* Macro Tool */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-3">
              Excel-Macro Automated Reporting Tool
            </h2>
            <p className="text-muted-foreground mb-4">
              Streamlined data cleaning, SQL job execution, and report delivery
              with automated macros and email scheduling.
            </p>
            <FullscreenProjectImage
              src="/images/macro-1-overview.png"
              alt="Excel-Macro Overview"
            />
            <Link
              href="/projects/data-analyst-projects/macro-tool"
              className="text-blue-600 hover:underline"
            >
              View Full Project →
            </Link>
          </CardContent>
        </Card>

        {/* Consumer Complaint Dashboard */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-3">
              Consumer Complaint Dashboard
            </h2>
            <p className="text-muted-foreground mb-4">
              Dashboard for analyzing complaints across agencies using
              normalized metrics for comparison.
            </p>
            <FullscreenProjectImage
              src="/images/consumerComplaint-1-dashboard-overview.png"
              alt="Consumer Complaint Overview"
            />
            <Link
              href="/projects/data-analyst-projects/consumer-complaints"
              className="text-blue-600 hover:underline"
            >
              View Full Project →
            </Link>
          </CardContent>
        </Card>

        {/* Healthcare Dashboard */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-3">Healthcare Dashboard</h2>
            <p className="text-muted-foreground mb-4">
              Analyzes readmission trends across diagnosis categories and
              demographic slices to identify high-risk groups.
            </p>
            <FullscreenProjectImage
              src="/images/healthcare-1-overview.png"
              alt="Healthcare Dashboard Overview"
            />
            <Link
              href="/projects/data-analyst-projects/healthcare-dashboard"
              className="text-blue-600 hover:underline"
            >
              View Full Project →
            </Link>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
