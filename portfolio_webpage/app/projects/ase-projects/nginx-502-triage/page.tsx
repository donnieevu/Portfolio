// app/projects/ase-projects/nginx-502-triage/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type ShotProps = {
  src: string;
  alt: string;
  caption: React.ReactNode;
  onClick: () => void;
};

// Consistent screenshot card (16:9 image, fixed caption height)
function Shot({ src, alt, caption, onClick }: ShotProps) {
  return (
    <figure
      className="flex h-full flex-col rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[16/9] bg-black/5">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain group-hover:opacity-95 transition-opacity"
        />
      </div>
      <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 leading-relaxed min-h-[3rem]">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function NginxTriagePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgBase = "/images/ase-projects/nginx-502-triage";

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
        <code>app:5000</code>). The goal was to practice ticket-ready triage:
        reproduce the 502 with <code>curl</code>, see the impact in Grafana, use
        Loki logs to pinpoint the upstream issue, fix <code>proxy_pass</code>,
        and verify recovery—then summarize everything in a short runbook.
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
            <li>Injected an upstream misconfig to force 502s</li>
            <li>
              Confirmed failures using <code>curl</code> and Grafana panels
            </li>
            <li>
              Used Loki logs to find{" "}
              <code>connect() failed (111: Connection refused)</code> on{" "}
              <code>/api/users</code>
            </li>
            <li>
              Reverted <code>proxy_pass</code> and verified 200 OK
            </li>
            <li>Documented a simple Nginx 502 troubleshooting flow</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Baseline: /api/users healthy behind Nginx</li>
            <li>
              Change: upstream updated to <code>app:9999</code>
            </li>
            <li>Impact: 502s and Nginx 5xx/min spike</li>
            <li>
              Evidence: logs show upstream <code>connect() failed</code>
            </li>
            <li>
              Fix: restore upstream to <code>app:5000</code>
            </li>
            <li>Recovery: 200 OK, 5xx back to 0</li>
          </ul>
        </div>
      </div>

      {/* Incident Response Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Incident Response Story</h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              1) Introduce Misconfig &amp; Reproduce 502
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              I intentionally pointed Nginx at the wrong upstream (
              <code>app:9999</code>) and hit <code>/api/users</code> through the
              proxy. This mimics a config change that breaks routing in
              production. As expected, <code>curl</code> returned{" "}
              <strong>502 Bad Gateway</strong>, matching what a customer would
              report.
            </p>
            <Shot
              src={`${imgBase}/injected-misconfig-1.png`}
              alt="Terminal: curl shows 502 Bad Gateway after upstream misconfig"
              caption={
                <>
                  After changing <code>proxy_pass</code> to{" "}
                  <code>http://app:9999</code>,{" "}
                  <code>curl -i http://localhost:8080/api/users</code> returns{" "}
                  <strong>502 Bad Gateway</strong>.
                </>
              }
              onClick={() =>
                setSelectedImage(`${imgBase}/injected-misconfig-1.png`)
              }
            />
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              2) Detect Impact in Metrics &amp; Logs
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              With the misconfig in place, I generated traffic and used Grafana
              to see the impact: Nginx 5xx/min spiked during the incident
              window, while Loki logs showed upstream connection failures on{" "}
              <code>/api/users</code>. This confirmed that the 502s were coming
              from Nginx, not the app or database.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/nginx-5xx-4.png`}
                alt="Grafana: Nginx 5xx/min panel shows spike during incident"
                caption={
                  <>
                    Grafana metric panel: <strong>Nginx 5xx/min</strong> spikes
                    during the misconfigured upstream window.
                  </>
                }
                onClick={() => setSelectedImage(`${imgBase}/nginx-5xx-4.png`)}
              />
              <Shot
                src={`${imgBase}/log-evidence-2.png`}
                alt="Grafana logs: connect() failed while connecting to upstream, 502"
                caption={
                  <>
                    Loki log evidence:{" "}
                    <code>connect() failed (111: Connection refused)</code> and{" "}
                    <code>502</code> on <code>/api/users</code>, showing Nginx
                    can&apos;t reach the upstream container.
                  </>
                }
                onClick={() =>
                  setSelectedImage(`${imgBase}/log-evidence-2.png`)
                }
              />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              3) Fix Upstream &amp; Verify Recovery
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              I restored <code>proxy_pass</code> back to{" "}
              <code>http://app:5000</code>, restarted Nginx, and re-ran the same{" "}
              <code>curl</code> checks. The endpoint returned 200 OK again, and
              5xx counts dropped back to zero. Metrics and logs both showed a
              clean post-fix window.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/traffic-generated-3.png`}
                alt="Grafana: Nginx requests per minute"
                caption={
                  <>
                    Requests/min panel in Grafana showing the{" "}
                    <strong>test traffic</strong> I used before and after the
                    fix.
                  </>
                }
                onClick={() =>
                  setSelectedImage(`${imgBase}/traffic-generated-3.png`)
                }
              />
              <Shot
                src={`${imgBase}/recovery-verified-5.png`}
                alt="Terminal: curl shows 200 OK after reverting upstream to app:5000"
                caption={
                  <>
                    After restoring the upstream to <code>app:5000</code>,{" "}
                    <code>curl -i http://localhost:8080/api/users</code> returns{" "}
                    <strong>200 OK</strong>, confirming recovery.
                  </>
                }
                onClick={() =>
                  setSelectedImage(`${imgBase}/recovery-verified-5.png`)
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Commands Used */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Commands Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Shell</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Break it: misconfigure upstream and restart Nginx
sed -i 's|proxy_pass http://app:5000|proxy_pass http://app:9999|' nginx/default.conf
docker compose restart nginx
curl -i http://localhost:8080/api/users   # 502

# Fix it: restore upstream and restart Nginx
sed -i 's|proxy_pass http://app:9999|proxy_pass http://app:5000|' nginx/default.conf
docker compose restart nginx
curl -i http://localhost:8080/api/users   # 200`}</pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">LogQL (Loki)</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Nginx requests/min
sum(count_over_time({compose_project="appsupportlab",compose_service="nginx"} [1m])) 

# Nginx 5xx/min
sum(count_over_time({compose_project="appsupportlab",compose_service="nginx"} |~ " 5\\\\d\\\\d " [1m]))

# Logs selector for evidence (filter in Explore)
{compose_project="appsupportlab",compose_service="nginx"}`}</pre>
          </div>
        </div>
      </section>

      {/* Outcome & Prevention */}
      <section className="rounded-lg border p-6 bg-muted/30 mb-6">
        <h2 className="text-xl font-bold mb-4">Outcome &amp; Prevention</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>
            Localized the outage to an{" "}
            <strong>Nginx upstream misconfiguration</strong>, not the app code
            or database layer.
          </li>
          <li>
            Practiced a repeatable pattern: reproduce with <code>curl</code> →
            check metrics → check logs → fix config → re-test.
          </li>
          <li>
            Captured a lightweight runbook for Nginx 502s: verify{" "}
            <code>proxy_pass</code>, look for <code>connect() failed</code> in
            logs, and confirm recovery with a post-fix smoke test.
          </li>
        </ul>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}
