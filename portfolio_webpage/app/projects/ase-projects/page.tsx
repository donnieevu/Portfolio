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
              <Link
                href="/projects/ase-projects/nginx-502-triage"
                className="hover:underline"
              >
                Nginx 502 Upstream Triage
              </Link>
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
          </div>
        </article>

        {/* API Key Misconfiguration — 401 Auth Outage */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <Link
                href="/projects/ase-projects/auth-apikey-outage"
                className="hover:underline"
              >
                API Key Misconfiguration — 401 Auth Outage
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4">
              Added header-based API key auth to a Flask service behind Nginx,
              then intentionally broke the key to reproduce an “everything is
              401 now” outage. Used Prometheus metrics and Grafana to spot the
              pattern and verify the fix.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>
                Protected <code>/api/users</code> with an <code>X-API-Key</code>{" "}
                header
              </li>
              <li>
                Custom metrics: <code>app_requests_total</code>,{" "}
                <code>app_auth_success_total</code>,{" "}
                <code>app_auth_failures_total</code>
              </li>
              <li>
                Grafana panels for requests/sec, auth successes/sec, and
                failures/sec
              </li>
              <li>
                Mini runbook for diagnosing and fixing 401 storms from
                bad/rotated API keys
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Status: Completed
            </span>
          </div>
        </article>

        {/* Database Credential Rotation Incident */}
        <article className="bg-card rounded-lg border shadow-sm p-6 flex flex-col justify-between h-full w-full">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <Link
                href="/projects/ase-projects/db-pw-rotation"
                className="hover:underline"
              >
                Database Credential Rotation Incident
              </Link>
            </h3>
            <p className="text-muted-foreground mb-4">
              Simulated a production outage caused by a Postgres password
              rotation where the application still used the old secret. Traced
              500s on the users API to DB auth failures, rolled back the
              credential safely, and documented a rotation checklist to prevent
              repeats.
            </p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>
                DB password rotation → 500s on <code>/api/users</code>
              </li>
              <li>
                Log correlation of 5xx responses with Postgres auth failures
              </li>
              <li>Mitigation via rollback or app-secret update + restart</li>
              <li>Written DB credential rotation checklist</li>
            </ul>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Status: Completed
            </span>
          </div>
        </article>
      </div>
    </main>
  );
}
