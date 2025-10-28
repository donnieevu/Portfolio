// app/projects/app-support/page.tsx
import Link from "next/link";

export default function AseProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      {/* Top bar with flex layout */}
      <div className="flex items-center justify-between mb-6">
        {/* Home button - always visible */}
        <Link
          href="/"
          className="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 flex-shrink-0 mr-4"
        >
          ← Home
        </Link>

        {/* Title - centered with flex grow */}
        <h1 className="text-2xl md:text-4xl font-bold text-center flex-1 min-w-0">
          Application Support Engineer Projects
        </h1>

        {/* Spacer to balance the layout */}
        <div className="w-14 flex-shrink-0 md:hidden"></div>
        <div className="w-20 flex-shrink-0 hidden md:block"></div>
      </div>

      {/* Centered subtitle with max width */}
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Incident-driven reliability labs showcasing triage, logging/monitoring,
        and runbooks.
      </p>

      {/* Single column grid for all projects */}
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {/* Nginx 502 Upstream Triage */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Nginx 502 Upstream Triage
            </h3>
            <p className="text-muted-foreground mb-4">
              Injected an upstream misconfig to force{" "}
              <code>502 Bad Gateway</code>, observed impact, triaged via
              Loki/Grafana logs and metrics, and restored service with a
              documented runbook.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Nginx ↔ Flask API ↔ Postgres</li>
              <li>Loki/Promtail + Grafana dashboards</li>
              <li>Before/after proof with curl &amp; 5xx metrics</li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Status: Completed
            </span>
            <Link
              href="/projects/ase-projects/nginx-502-triage"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View project →
            </Link>
          </div>
        </article>

        {/* Memory & Performance Monitoring */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Memory & Performance Monitoring
            </h3>
            <p className="text-muted-foreground mb-4">
              Simulated memory leaks and high CPU usage, then built monitoring
              dashboards to track request patterns, errors, slow requests, and
              memory usage.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Memory leak simulation with /api/memory-hog</li>
              <li>CPU load testing with /api/burncpu</li>
              <li>Docker stats for resource monitoring</li>
              <li>4-panel Grafana dashboard</li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Status: Completed
            </span>
            <Link
              href="/projects/ase-projects/memory-performance"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View project →
            </Link>
          </div>
        </article>

        {/* Full Incident Simulation */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Full Incident Simulation
            </h3>
            <p className="text-muted-foreground mb-4">
              Executed complete incident response for simulated production
              outage caused by memory leak. Followed professional
              troubleshooting from alert through root cause identification,
              resolution, and verification.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Memory leak identification & metrics analysis</li>
              <li>Multi-tool investigation (CLI + Grafana dashboards)</li>
              <li>Container restart & comprehensive verification</li>
              <li>Complete incident documentation</li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Status: Completed
            </span>
            <Link
              href="/projects/ase-projects/fullincident-simulation"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              View project →
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
