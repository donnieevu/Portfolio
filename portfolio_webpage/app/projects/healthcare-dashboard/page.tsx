import { Badge } from "@/components/ui/badge";
import FullscreenProjectGallery from "@/components/fullscreen-project-gallery";
import Link from "next/link";

const images = [
  {
    src: "/images/healthcare-1-overview.png",
    alt: "Overview",
    caption: "Dashboard Overview",
  },
  {
    src: "/images/healthcare-2-dashboard-1.png",
    alt: "By Diagnosis & Age",
    caption: "Readmission by Diagnosis & Age",
  },
  {
    src: "/images/healthcare-3-dashboard-2.png",
    alt: "By Treatment & Stay",
    caption: "Readmission by Treatment & Stay",
  },
  {
    src: "/images/healthcare-4-takeaways.png",
    alt: "Takeaways",
    caption: "Project Takeaways",
  },
];

export default function HealthcareDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 space-y-10">
      <Link href="/#projects" className="text-sm text-blue-500 hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="text-3xl font-bold">Healthcare Dashboard</h1>
      <p className="text-muted-foreground text-lg">
        Data visualization project analyzing hospital readmission trends by
        diagnosis, treatment, and patient demographics to identify high-risk
        groups and improve care outcomes.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Analysis of readmission rates by length of hospital stay</li>
            <li>Identification of high-risk age groups and diagnoses</li>
            <li>
              Evaluation of A1C test results to assess diabetes management
            </li>
            <li>
              Interactive filters for age, diagnosis, and emergency visits
            </li>
            <li>
              Reference lines to highlight averages across all stay durations
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Tableau</Badge>
            <Badge variant="secondary">SQL</Badge>
            <Badge variant="secondary">Data Visualization</Badge>
            <Badge variant="secondary">Healthcare Analytics</Badge>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>
              Identified 7–9 day stays had highest readmission rate at 51%
            </li>
            <li>
              Discovered patients without A1C testing had 47% readmission rate
            </li>
            <li>
              Found older age groups (70–90) had highest readmission rates
            </li>
            <li>Highlighted top diagnoses with highest readmission numbers</li>
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
