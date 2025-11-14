// app/projects/ase-projects/memory-leak/page.tsx
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

// Consistent screenshot card (fixed 16:9 area + equal caption height)
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

export default function AuthApiKeyOutagePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgBase = "/images/ase-projects/auth-apikey-outage";

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          API Key Misconfiguration — 401 Auth Outage
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        End-to-end incident response for a very common ticket:{" "}
        <strong>&quot;everything is 401 now&quot;</strong>. I added simple API
        key auth to a Flask API behind Nginx, instrumented Prometheus metrics
        for requests and auth outcomes, then{" "}
        <strong>broke the API key on purpose</strong>. Grafana showed auth
        failures spiking while requests/sec stayed flat. I then realigned the
        configuration, restored 200s, and used metrics + dashboards to verify
        recovery.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker Compose • Nginx • Flask • Postgres • Prometheus • Grafana •
            Linux
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>
              Added header-based auth using <code>X-API-Key</code> and
              instrumented metrics:
              <code>app_requests_total</code>,{" "}
              <code>app_auth_success_total</code>,{" "}
              <code>app_auth_failures_total</code>.
            </li>
            <li>
              Built Grafana panels for{" "}
              <span className="italic">requests/sec</span>,{" "}
              <span className="italic">auth failures/sec</span>, and{" "}
              <span className="italic">auth successes/sec</span>.
            </li>
            <li>
              Baseline: valid key (<code>apikey-v2</code>) → 200s on{" "}
              <code>/api/users</code>, successes increment, failures stay 0.
            </li>
            <li>
              Broke auth by rotating the app&apos;s expected key without
              updating the caller → every request 401 Unauthorized.
            </li>
            <li>
              Used <code>/metrics</code> + Grafana to see failures spike, then
              fixed the config and confirmed that successes resumed and failures
              flattened.
            </li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Baseline: all services healthy, 200 on /api/users.</li>
            <li>
              Grafana shows requests/sec &amp; auth successes/sec, 0 fails.
            </li>
            <li>
              Rotate expected API key in <code>docker-compose.yml</code> →
              caller still sends old key.
            </li>
            <li>
              Requests flip to 401; auth failures/sec spikes while requests/sec
              stays steady.
            </li>
            <li>
              Align keys, redeploy app, validate 200s and stable auth metrics.
            </li>
          </ul>
        </div>
      </div>

      {/* Incident Response Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Incident Response Story</h2>

        <div className="space-y-12">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              1) Baseline &amp; Auth Instrumentation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              First I confirmed the lab stack was healthy and that auth behaved
              correctly with a known-good key. Requests to{" "}
              <code>/api/users</code> with <code>apikey-v2</code> returned 200
              OK, <code>/health</code> was green, and the <code>/metrics</code>{" "}
              endpoint showed auth successes increasing with failures still at
              0. This gave me a clean baseline for both the API and the
              observability layer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-6">
              <Shot
                src={`${imgBase}/01-auth-outage-401-services-running-200.png`}
                alt="docker compose ps plus a 200 OK response from /api/users"
                caption={
                  <>
                    Baseline: all services are up in{" "}
                    <code>docker compose ps</code>, and{" "}
                    <code>curl -i -H &quot;X-API-Key: apikey-v1&quot;</code>{" "}
                    against <code>/api/users</code> returns 200 OK.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/01-auth-outage-401-services-running-200.png`
                  )
                }
              />
              <Shot
                src={`${imgBase}/02-auth-outage-401-auth-baseline.png`}
                alt="Terminal showing app_auth_success_total incrementing and failures at zero"
                caption={
                  <>
                    Baseline auth: calling <code>/api/users</code> with{" "}
                    <code>X-API-Key: apikey-v1</code> returns{" "}
                    <code>200 OK</code> and the JSON list of users. This proves
                    the original key works end-to-end before we rotate anything.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/02-auth-outage-401-auth-baseline.png`
                  )
                }
              />
            </div>
            <Shot
              src={`${imgBase}/03-auth-outage-401-dashboards-success.png`}
              alt="Grafana dashboard with requests/sec and auth successes/sec while failures/sec stays at zero"
              caption={
                <>
                  Grafana baseline: requests/sec and auth successes/sec track
                  together; the auth failures/sec panel is flat at zero. This is
                  the &quot;good&quot; picture we&apos;ll compare everything
                  else against.
                </>
              }
              onClick={() =>
                setSelectedImage(
                  `${imgBase}/03-auth-outage-401-dashboards-success.png`
                )
              }
            />
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              2) Introduce Auth Misconfiguration → 401s
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              To simulate a real-world auth break, I rotated the app&apos;s
              expected API key in <code>docker-compose.yml</code> to a new value
              (for example <code>apikey-v2</code>) and rebuilt only the app
              container. The caller still used the original{" "}
              <code>apikey-v1</code> header, so the app started rejecting every
              request with 401 Unauthorized.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/04-auth-outage-401-rotation-applied.png`}
                alt="Editor and docker compose up -d --build app showing new APP_API_KEY deployed"
                caption={
                  <>
                    Outage injected: <code>APP_API_KEY</code> is changed in{" "}
                    <code>docker-compose.yml</code>, then{" "}
                    <code>docker compose up -d --build app</code> rolls the
                    change into the running container.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/04-auth-outage-401-rotation-applied.png`
                  )
                }
              />
              <Shot
                src={`${imgBase}/05-auth-outage-401-after-rotation.png`}
                alt="curl with X-API-Key: apikey-v1 now returning 401 Unauthorized JSON"
                caption={
                  <>
                    After the rotation, the same{" "}
                    <code>curl -i -v -H &quot;X-API-Key: apikey-v1&quot;</code>{" "}
                    call now gets <strong>HTTP/1.1 401 Unauthorized</strong>{" "}
                    with <code>{`{"error":"unauthorized"}`}</code>. Classic
                    &quot;everything is 401 now&quot; behavior.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/05-auth-outage-401-after-rotation.png`
                  )
                }
              />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              3) Observe the Failure Pattern in Metrics
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              With the misconfig live, I drove steady traffic using a{" "}
              <code>curl</code> loop that kept sending the old key. In Grafana,
              <strong>requests/sec stayed flat</strong> (clients kept calling),
              but <strong>auth failures/sec spiked</strong> while successes/sec
              dropped to zero. At the same time, the counters scraped from{" "}
              <code>/metrics</code> showed failures overtaking successes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/06-auth-outage-401-grafana-failures-spike.png`}
                alt="Grafana showing auth failures/sec spike while requests/sec stays steady"
                caption={
                  <>
                    Grafana during the outage: requests/sec continues, but the{" "}
                    <strong>Auth failures/sec</strong> panel spikes exactly
                    during the 401 window while successes/sec flatlines.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/06-auth-outage-401-grafana-failures-spike.png`
                  )
                }
              />
              <Shot
                src={`${imgBase}/09-auth-metrics-totals.png`}
                alt="curl to /metrics showing app_auth_failures_total higher than app_auth_success_total"
                caption={
                  <>
                    Counter view from <code>/metrics</code>:{" "}
                    <code>app_auth_failures_total</code> has jumped ahead of{" "}
                    <code>app_auth_success_total</code>, confirming what Grafana
                    shows and giving a simple CLI view of the same story.
                  </>
                }
                onClick={() =>
                  setSelectedImage(`${imgBase}/09-auth-metrics-totals.png`)
                }
              />
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              4) Recovery &amp; Verification
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              To fix the outage, I aligned the caller and server to a new shared
              key (<code>apikey-v2</code>), redeployed the app container, and
              re-ran the same traffic pattern. <code>/api/users</code> returned
              200 again, <code>app_auth_failures_total</code> stopped
              increasing, and Grafana showed successes/sec back on top with
              failures/sec at zero.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/07-auth-outage-401-200-after-fix.png`}
                alt="curl with X-API-Key: apikey-v2 returning 200 OK and user JSON"
                caption={
                  <>
                    Post-fix: with <code>apikey-v2</code> in the header,{" "}
                    <code>/api/users</code> is back to{" "}
                    <strong>HTTP/1.1 200 OK</strong> and returns the full JSON
                    user list.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/07-auth-outage-401-200-after-fix.png`
                  )
                }
              />
              <Shot
                src={`${imgBase}/08-auth-outage-401-grafana-recovery.png`}
                alt="Grafana showing requests/sec and auth successes/sec recovering, failures/sec flat"
                caption={
                  <>
                    Recovery view in Grafana: requests/sec and auth
                    successes/sec are back in sync while auth failures/sec stays
                    flat, confirming no new 401s after the fix.
                  </>
                }
                onClick={() =>
                  setSelectedImage(
                    `${imgBase}/08-auth-outage-401-grafana-recovery.png`
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commands */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Commands Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">Repro &amp; Evidence</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Baseline: valid key (apikey-v1)
curl -i -H "X-API-Key: apikey-v1" http://localhost:8080/api/users
curl -s http://localhost:8080/metrics | grep app_auth_

# Introduce auth outage (rotate app key only)
# 1) Edit docker-compose.yml -> APP_API_KEY=apikey-v2
# 2) Redeploy app container:
docker compose up -d --build app

# Drive traffic that will now fail auth
for i in {1..40}; do
  curl -s -o /dev/null -w "%{http_code}\n" \
    -H "X-API-Key: apikey-v1" \
    http://localhost:8080/api/users
  sleep 0.3
done

# Check metrics from the CLI
curl -s http://localhost:8080/metrics | grep app_auth_`}</pre>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">
              Grafana Panels &amp; Recovery
            </h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# PromQL for Grafana panels
# App: requests/sec
rate(app_requests_total[1m])

# Auth failures/sec
rate(app_auth_failures_total[1m])

# Auth successes/sec
rate(app_auth_success_total[1m])

# Fix: align keys and redeploy
# 1) Edit docker-compose.yml -> APP_API_KEY=apikey-v2
docker compose up -d --build app

# 2) Call API with the new key
curl -i -H "X-API-Key: apikey-v2" http://localhost:8080/api/users

# 3) Confirm counters and graphs look healthy
curl -s http://localhost:8080/metrics | grep app_auth_`}</pre>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="rounded-lg border p-6 bg-muted/30">
        <h2 className="text-xl font-bold mb-4">Outcome &amp; Prevention</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>
            Localized the outage to an{" "}
            <strong>API key mismatch between caller and app</strong>; traffic
            still reached the service but failed auth.
          </li>
          <li>
            Built a small, reusable dashboard for auth health: requests/sec vs
            auth successes/sec vs auth failures/sec.
          </li>
          <li>
            Captured a simple <strong>rotation runbook</strong>: update secret →
            redeploy → test with new key → confirm metrics (no new failures).
          </li>
          <li>
            This pattern generalizes to many real SaaS tickets: wrong API key,
            expired token, missing scopes, or misconfigured client secrets.
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