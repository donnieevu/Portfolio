// app/projects/ase-projects/memory-performance/page.tsx
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

export default function MemoryPerformancePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Memory Leak Detection &amp; Monitoring
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        I turned a small Flask API into a{" "}
        <span className="font-semibold">memory leak incident lab</span> by
        adding a &quot;chaos&quot; endpoint, <code>/api/memory-hog</code>. The
        goal was to simulate a bug where memory steadily grows under repeated
        calls, detect the leak using Prometheus metrics (
        <code>app_memory_leak_size</code>, <code>app_error_count</code>), and
        then refactor the handler and rerun the same scripted load test to prove
        that the leak no longer appears in Grafana.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker Compose • Flask • Postgres • Nginx • Prometheus • Grafana •
            Loki/Promtail
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>
              Introduced a simulated memory leak at <code>/api/memory-hog</code>
              .
            </li>
            <li>
              Exposed custom metrics: <code>app_memory_leak_size</code> (gauge)
              and <code>app_error_count</code> (counter) for leak visibility.
            </li>
            <li>
              Established a baseline in Grafana, then reproduced the leak with a
              repeatable <code>curl</code>-based load script and watched{" "}
              <code>app_memory_leak_size</code> grow over time.
            </li>
            <li>
              Refactored <code>/api/memory-hog</code> to stop accumulating
              leaked data and reran the same test to validate that{" "}
              <code>app_memory_leak_size</code> stabilized instead of leaking.
            </li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Artifacts</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>
              Before/after Grafana panels (leak size &amp; error rate) showing
              detection and verification.
            </li>
            <li>
              Shell scripts to reproduce the leak in a controlled way (load
              against <code>/api/memory-hog</code>).
            </li>
            <li>
              A short runbook documenting detection, triage, fix, and
              validation.
            </li>
          </ul>
        </div>
      </div>

      {/* Screenshots */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Evidence &amp; Screens</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* 1: docker compose ps */}
          <Shot
            src="/images/ase-projects/memory-performance/01-mp-services-running.png"
            alt="Docker Compose: app, db, Prometheus, Grafana, Loki, Nginx, Promtail all running"
            caption={
              <>
                All services healthy: app, Postgres, Prometheus, Grafana, Loki,
                Nginx, and Promtail are up before testing (
                <code>docker compose ps</code>). This sets a clean baseline
                before introducing the leak.
              </>
            }
            onClick={() =>
              setSelectedImage(
                "/images/ase-projects/memory-performance/01-mp-services-running.png"
              )
            }
          />

          {/* 2: Baseline Grafana */}
          <Shot
            src="/images/ase-projects/memory-performance/02-mp-baseline-no-traffic.png"
            alt="Grafana baseline with app_memory_leak_size and app_error_count flat at zero"
            caption={
              <>
                Baseline view in Grafana: <code>app_memory_leak_size</code> and{" "}
                <code>app_error_count</code> stay flat at 0 with no traffic
                hitting the API. If a leak appears later, it will stand out
                against this baseline.
              </>
            }
            onClick={() =>
              setSelectedImage(
                "/images/ase-projects/memory-performance/02-mp-baseline-no-traffic.png"
              )
            }
          />

          {/* 3: Leak reproduced */}
          <Shot
            src="/images/ase-projects/memory-performance/03-mp-before-fix-memory-leak.png"
            alt="Grafana showing app_memory_leak_size jumping and staying elevated during curl load"
            caption={
              <>
                Leak reproduced: after hammering <code>/api/memory-hog</code>{" "}
                with the load script, <code>app_memory_leak_size</code> jumps
                from 0 to ~200 and never returns to baseline, while error count
                stays at 0. This shows a{" "}
                <span className="font-semibold">silent memory leak</span> that
                metrics can catch before user-visible errors.
              </>
            }
            onClick={() =>
              setSelectedImage(
                "/images/ase-projects/memory-performance/03-mp-before-fix-memory-leak.png"
              )
            }
          />

          {/* 4: curl load loop */}
          <Shot
            src="/images/ase-projects/memory-performance/04-mp-after-fix-load-loop.png"
            alt="Terminal running curl load loop against /api/memory-hog"
            caption={
              <>
                Repro script: a simple <code>for</code>-loop of{" "}
                <code>curl</code> calls to{" "}
                <code>http://localhost:8080/api/memory-hog</code> used both
                before and after the code change. Using the same script makes
                before/after Grafana comparisons meaningful.
              </>
            }
            onClick={() =>
              setSelectedImage(
                "/images/ase-projects/memory-performance/04-mp-after-fix-load-loop.png"
              )
            }
          />
        </div>
      </section>

      {/* Commands & Queries */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Commands &amp; Queries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Shell</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Start all services
docker compose up -d
docker compose ps

# (Optional) quick health check
curl -i http://localhost:8080/api/health

# Reproduce the memory leak from WSL / Git Bash
for i in {1..200}; do
  curl -s http://localhost:8080/api/memory-hog > /dev/null
  sleep 0.2
done

# After refactoring /api/memory-hog to stop leaking,
# rerun the same loop and compare Grafana panels to confirm
# that app_memory_leak_size no longer grows without bound.`}</pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">
              PromQL (Prometheus / Grafana)
            </h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Leak size over time (gauge)
app_memory_leak_size

# Error rate over time (counter -> rate)
rate(app_error_count[1m])`}</pre>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">
              Runbook: Memory Leak at /api/memory-hog
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Detection via Grafana (<code>app_memory_leak_size</code> trending
              up while <code>app_error_count</code> stays flat) → Triage
              (confirm the traffic pattern is tied to{" "}
              <code>/api/memory-hog</code>, review recent code changes) →
              Remediation (fix the leaking data structure in <code>app.py</code>
              ) → Verification (rerun the same curl load and confirm{" "}
              <code>app_memory_leak_size</code> stays bounded instead of growing
              indefinitely).
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Mini Incident Summary</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Root cause: a deliberately &quot;leaky&quot; implementation of{" "}
              <code>/api/memory-hog</code> that grew an in-memory structure on
              each call. Corrective action: refactored the handler to stop
              accumulating unbounded data and used before/after Grafana
              screenshots and metrics to prove the leak was eliminated under the
              same load pattern.
            </p>
          </article>
        </div>
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
