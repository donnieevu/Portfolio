// app/projects/memory-performance/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function MemoryPerformancePage() {
  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Memory & Performance Monitoring
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
            <li>Simulated memory leaks with /api/memory-hog</li>
            <li>Generated high CPU load with /api/burncpu</li>
            <li>Monitored container resources with docker stats</li>
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

      {/* Screenshot */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Monitoring Dashboard</h2>

        <div className="grid grid-cols-1 gap-6">
          <figure className="rounded-lg overflow-hidden border bg-background">
            <Image
              src="/images/ase-projects/memory-performance/app-monitoring-dashboard.png"
              alt="Grafana dashboard showing Request Count, Error Count, Slow Requests Count, and Memory Leak Size"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
            <figcaption className="p-3 text-sm text-muted-foreground">
              Grafana dashboard: Four key metrics tracking application health
              and performance characteristics.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Day 3 Commands */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Commands & Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Memory Leak Simulation</h3>
            <pre className="text-xs md:text-sm overflow-auto">
              {`# Check container resource usage
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
curl http://localhost:8080/api/metrics`}
            </pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-2">Performance Testing</h3>
            <pre className="text-xs md:text-sm overflow-auto">
              {`# Simulate high CPU usage
curl http://localhost:8080/api/burncpu

# Check for performance logs
docker-compose logs app | grep -i "warning\|slow\|memory\|cpu"

# Grafana Dashboard Setup:
# 1. Go to http://localhost:3000
# 2. Add new dashboard
# 3. Data source: Prometheus (http://prometheus:9090)
# 4. Add panels for:
#    - Request Count
#    - Error Count  
#    - Slow Requests Count
#    - Memory Leak Size`}
            </pre>
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
    </main>
  );
}
