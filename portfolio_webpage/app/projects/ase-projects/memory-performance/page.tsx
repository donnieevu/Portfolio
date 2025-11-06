// app/projects/memory-performance/page.tsx
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
      <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-12 flex items-center">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function MemoryPerformancePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Base path for screenshots (change if your folder differs)
  const imgBase = "/images/ase-projects/memory-performance";

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Memory &amp; Performance Monitoring
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        Implemented application monitoring to detect memory leaks and
        performance issues. Created a Grafana dashboard tracking request
        patterns, error rates, slow requests, and memory usage to identify
        resource bottlenecks and application health issues.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker • Flask • Prometheus • Grafana
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>
              Simulated memory leaks with <code>/api/memory-hog</code>
            </li>
            <li>
              Generated high CPU load with <code>/api/burncpu</code>
            </li>
            <li>
              Monitored container resources with <code>docker stats</code>
            </li>
            <li>Built Grafana dashboard with 4 key metrics</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Metrics Tracked</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Request Count</li>
            <li>Error Count</li>
            <li>Slow Requests Count</li>
            <li>Memory Leak Size</li>
          </ul>
        </div>
      </div>

      {/* Monitoring Dashboard */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Monitoring Dashboard</h2>

        <div className="grid grid-cols-1 gap-6">
          <Shot
            src={`${imgBase}/app-monitoring-dashboard.png`}
            alt="Grafana dashboard showing Request Count, Error Count, Slow Requests Count, and Memory Leak Size"
            caption={
              <>
                Grafana dashboard: four key metrics tracking application health
                and performance.
              </>
            }
            onClick={() =>
              setSelectedImage(`${imgBase}/app-monitoring-dashboard.png`)
            }
          />
        </div>
      </section>

      {/* Commands & Steps */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Commands &amp; Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Memory Leak Simulation</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Check container resource usage
docker stats

# Simulate memory leak
curl http://localhost:8080/api/memory-hog

# Call multiple times to increase memory
curl http://localhost:8080/api/memory-hog
curl http://localhost:8080/api/memory-hog  
curl http://localhost:8080/api/memory-hog
curl http://localhost:8080/api/memory-hog
curl http://localhost:8080/api/memory-hog

# Check memory usage snapshot
docker stats --no-stream

# Check application metrics
curl http://localhost:8080/api/metrics`}</pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Performance Testing</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Simulate high CPU usage
curl http://localhost:8080/api/burncpu

# Check for performance logs
docker compose logs app | grep -i "warning\\|slow\\|memory\\|cpu"

# Grafana Dashboard Setup:
# 1. Go to http://localhost:3000
# 2. Add new dashboard
# 3. Data source: Prometheus (http://prometheus:9090)
# 4. Add panels for:
#    - Request Count
#    - Error Count  
#    - Slow Requests Count
#    - Memory Leak Size`}</pre>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Memory Monitoring</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learned to identify memory leaks using <code>docker stats</code>{" "}
              and application metrics. Tracked memory growth patterns and
              understood how gradual memory leaks impact application stability.
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Performance Baselines</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Established performance monitoring with Grafana dashboards.
              Created visibility into request patterns, error rates, and
              resource usage to detect anomalies and performance degradation.
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
