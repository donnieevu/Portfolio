// app/projects/app-support/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function nginxTriagePage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Nginx 502 Upstream Triage
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        I simulated a customer-facing outage by misconfiguring the Nginx
        upstream (pointing to <code>app:9999</code> instead of{" "}
        <code>app:5000</code>). The goal was to demonstrate ticket triage:
        detect the failure in Grafana, confirm with
        <code> curl</code>, identify root cause via logs, remediate, and verify
        recovery—then document the incident and a runbook.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker Compose • Nginx • Flask • Postgres • Loki/Promtail • Grafana
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Injected misconfig to force 502</li>
            <li>Confirmed via curl + dashboards</li>
            <li>Triaged logs (upstream connect() failed)</li>
            <li>Reverted config, verified recovery</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Artifacts</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Grafana logs & metrics (5xx/min, req/min)</li>
            <li>Runbook + Incident Report</li>
          </ul>
        </div>
      </div>

      {/* Screenshots */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Evidence & Screens</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1: Terminal – 502 Bad Gateway curl */}
          <figure className="rounded-lg overflow-hidden border bg-background">
            <Image
              src="/images/ase-projects/nginx-502-triage/injected-misconfig-1.png"
              alt="Terminal: curl shows 502 Bad Gateway after upstream misconfig"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              After changing <code>proxy_pass</code> to <code>app:9999</code>,{" "}
              <code>curl</code> to
              <code> /api/users</code> returns <strong>502 Bad Gateway</strong>.
            </figcaption>
          </figure>

          {/* 2: Grafana – Nginx 5xx spike */}
          <figure className="rounded-lg overflow-hidden border bg-background">
            <Image
              src="/images/ase-projects/nginx-502-triage/nginx-5xx-4.png"
              alt="Grafana: Nginx 5xx/min panel shows spike during incident"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              Grafana metric panel: **Nginx 5xx/min** shows a spike during the
              incident window.
            </figcaption>
          </figure>

          {/* 3: Grafana – Nginx log line with 502 & connect() failed */}
          <figure className="rounded-lg overflow-hidden border bg-background">
            <Image
              src="/images/ase-projects/nginx-502-triage/log-evidence-2.png"
              alt="Grafana logs: connect() failed while connecting to upstream, 502"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              Loki log evidence:{" "}
              <code>connect() failed (111: Connection refused)</code> and
              <code> 502</code> on <code>/api/users</code>.
            </figcaption>
          </figure>

          {/* 4: Grafana – Requests/min */}
          <figure className="rounded-lg overflow-hidden border bg-background">
            <Image
              src="/images/ase-projects/nginx-502-triage/traffic-generated-3.png"
              alt="Grafana: Nginx requests per minute"
              width={1200}
              height={700}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              Traffic generation during testing visible in **requests/min**.
            </figcaption>
          </figure>

          {/* 5: Terminal – Recovery back to 200 OK */}
          <figure className="rounded-lg overflow-hidden border bg-background md:col-span-2">
            <Image
              src="/images/ase-projects/nginx-502-triage/recovery-verified-5.png"
              alt="Terminal: curl shows 200 OK after reverting upstream to app:5000"
              width={1600}
              height={800}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              Reverted upstream to <code>app:5000</code> and confirmed recovery:
              <code> curl -i /api/users</code> returns <strong>200 OK</strong>.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Commands & LogQL used (helps reviewers) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Commands & Queries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Shell</h3>
            <pre className="text-xs md:text-sm overflow-auto">
              {`# Break it
sed -i 's|proxy_pass http://app:5000|proxy_pass http://app:9999|' nginx/default.conf
docker compose restart nginx
curl -i http://localhost:8080/api/users   # 502

# Fix it
sed -i 's|proxy_pass http://app:9999|proxy_pass http://app:5000|' nginx/default.conf
docker compose restart nginx
curl -i http://localhost:8080/api/users   # 200`}
            </pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">LogQL (Loki)</h3>
            <pre className="text-xs md:text-sm overflow-auto">
              {`# Nginx requests/min
sum(count_over_time({compose_project="appsupportlab",compose_service="nginx"} [1m])) 

# Nginx 5xx/min
sum(count_over_time({compose_project="appsupportlab",compose_service="nginx"} |~ " 5\\\\d\\\\d " [1m]))

# Logs selector for evidence
{compose_project="appsupportlab",compose_service="nginx"}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Incident & Runbook summary */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Runbook: Nginx 502 (Upstream)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Detection (5xx/min, failing curl) → Triage (logs, upstream check)
              → Remediation (fix <code>proxy_pass</code>) → Verification (200
              OK, 5xx=0).
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Incident Report: INC-001</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Root cause: upstream port misconfig. Evidence: 502, connect()
              failed. Corrective actions: config validation in CI; smoke test
              after reload.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
