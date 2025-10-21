// app/projects/app-support/page.tsx
import Link from "next/link";

export default function AseProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      {/* Top bar with centered title + right-aligned Home */}
      <div className="relative mb-6">
        <h1 className="text-4xl font-bold text-center">
          Application Support Engineer Projects
        </h1>
        <Link
          href="/"
          className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium text-blue-600 hover:underline hover:text-blue-700"
        >
          ← Home
        </Link>
      </div>

      {/* Centered subtitle with max width */}
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
        Incident-driven reliability labs showcasing triage, logging/monitoring,
        and runbooks.
      </p>

      {/* Grid: 1 column on mobile, 2 on md+.
          Single-card case is centered; when you add more, they'll flow 2 per row. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Existing/other cards... */}

        {/* ASE Ticket/Triage (Nginx 502) */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full max-w-xl mx-auto md:mx-0">
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

        {/* Memory & Performance Monitoring Card */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full max-w-xl mx-auto md:mx-0">
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
      </div>
    </main>
  );
}
