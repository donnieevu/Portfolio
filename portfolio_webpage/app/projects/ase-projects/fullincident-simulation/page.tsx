// app/projects/fullincident-simulation/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function FullIncidentSimulationPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Full Incident Simulation
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        Executed a complete incident response workflow for a simulated
        production outage caused by a memory leak. Followed professional
        troubleshooting methodology from initial alert through root cause
        identification, resolution, and verification using both CLI tools and
        monitoring dashboards.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker • Flask • Prometheus • Grafana • Linux
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Responded to simulated user-reported errors</li>
            <li>Systematic investigation using CLI and dashboards</li>
            <li>Identified memory leak as root cause</li>
            <li>Executed container restart and verified resolution</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Alert received: User errors reported</li>
            <li>Investigation: Health checks & diagnostics</li>
            <li>Root cause: Memory leak identified</li>
            <li>Resolution: Container restart</li>
            <li>Verification: Service recovery confirmed</li>
          </ul>
        </div>
      </div>

      {/* Incident Response Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Incident Response Story</h2>

        <div className="space-y-12">
          {/* Step 1: Initial Investigation */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              1. Initial Investigation & Triage
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Started with basic health checks and service status verification.
              Reproduced user-reported errors by testing multiple API endpoints
              to understand the scope and impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-initial-investigation(1).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-initial-investigation(1).png"
                    alt="Health check and service status verification"
                    width={800}
                    height={500}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Service health check and container status verification
                </figcaption>
              </figure>
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-initial-investigation(2).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-initial-investigation(2).png"
                    alt="Reproducing user issues with API endpoints"
                    width={800}
                    height={500}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Testing API endpoints to reproduce user-reported errors
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Step 2: System Diagnostics */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              2. System Diagnostics & Monitoring
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Utilized comprehensive monitoring tools to identify performance
              patterns, resource constraints, and error trends across the
              application stack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-resource-check(3).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-resource-check(3).png"
                    alt="Container resource usage analysis"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Container resource utilization analysis
                </figcaption>
              </figure>
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-dashboards(6).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-dashboards(6).png"
                    alt="Performance monitoring dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Performance monitoring dashboard
                </figcaption>
              </figure>
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-dashboards(7).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-dashboards(7).png"
                    alt="Error monitoring dashboard"
                    width={600}
                    height={400}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Error monitoring dashboard
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Step 3: Root Cause Identification */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-600">
              3. Root Cause Identification
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Correlated database health with application logs to identify the
              memory leak. Database logs confirmed normal operation while
              application logs showed progressive memory accumulation through
              repeated endpoint calls.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-db-logs(4).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-db-logs(4).png"
                    alt="Database health verification logs"
                    width={800}
                    height={400}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Database health confirmed - normal operation and checkpoints
                </figcaption>
              </figure>
              <figure
                className="rounded-lg overflow-hidden border bg-background cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
                onClick={() =>
                  setSelectedImage(
                    "/images/ase-projects/fullincident-simulation/fis-app-logs(5).png"
                  )
                }
              >
                <div className="flex-1">
                  <Image
                    src="/images/ase-projects/fullincident-simulation/fis-app-logs(5).png"
                    alt="Application memory leak logs showing growth"
                    width={800}
                    height={400}
                    className="w-full h-auto group-hover:opacity-95 transition-opacity"
                  />
                </div>
                <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                  Memory leak evidence - growing from 17MB to 20MB in
                  application logs
                </figcaption>
              </figure>
            </div>
          </div>

          {/* Step 4: Resolution & Verification */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              4. Resolution & Verification
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Executed controlled remediation by restarting the application
              container and performed comprehensive verification to ensure
              complete resolution and service recovery.
            </p>
            <figure
              className="rounded-lg overflow-hidden border bg-background max-w-4xl mx-auto cursor-pointer group transition-all duration-200 hover:shadow-lg hover:border-blue-300 flex flex-col h-full"
              onClick={() =>
                setSelectedImage(
                  "/images/ase-projects/fullincident-simulation/fis-restart-app(8).png"
                )
              }
            >
              <div className="flex-1">
                <Image
                  src="/images/ase-projects/fullincident-simulation/fis-restart-app(8).png"
                  alt="Complete incident resolution workflow showing restart and verification"
                  width={1200}
                  height={600}
                  className="w-full h-auto group-hover:opacity-95 transition-opacity"
                />
              </div>
              <figcaption className="p-3 text-sm text-muted-foreground border-t bg-background/50 min-h-[60px] flex items-center">
                Resolution workflow: Memory leak at 20MB → Container restart →
                Verified cleared to 0MB
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Incident Response Commands */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Incident Response Commands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">Investigation & Diagnostics</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">
              {`# Health check and service status
curl http://localhost:8080/api/health
docker compose ps

# Reproduce user issues
curl http://localhost:8080/api/users
curl http://localhost:8080/api/unreliable
curl http://localhost:8080/api/slow-db

# Resource analysis
docker stats --no-stream
docker compose logs app --tail=20
docker compose logs db --tail=20

# Dashboard investigation
# Grafana: http://localhost:3000
# - Check Performance Monitoring dashboard
# - Review Error Monitoring trends
# - Analyze memory usage patterns

# Metrics investigation
curl http://localhost:8080/api/metrics
curl http://localhost:8080/api/metrics | grep memory_leak_size`}
            </pre>
          </div>

          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">Resolution & Verification</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">
              {`# Execute remediation
docker compose restart app

# Wait for service recovery
sleep 30

# Verify resolution
curl http://localhost:8080/api/health
curl http://localhost:8080/api/users
curl http://localhost:8080/api/metrics

# Confirm memory leak cleared
curl http://localhost:8080/api/metrics | grep memory_leak_size

# Cross-verify with dashboards
# - Confirm error rates normalized
# - Verify memory usage stabilized
# - Check request patterns returned to baseline

# Incident documentation
cat > incident_report.md << EOF
# Incident Report - Application Errors

## Timeline
- 19:12: Memory leak detected growing from 17MB to 20MB
- 19:15: Database health verified - normal operation
- 19:18: Identified memory leak as root cause
- 19:20: Restarted application container
- 19:22: Verified resolution - memory leak cleared to 0MB

## Root Cause
Memory leak in application accumulating over time through 
repeated /memory-hog endpoint calls, reaching critical 
threshold causing application instability

## Resolution
Restarted application container to clear accumulated memory

## Prevention
Recommended code review to identify and fix memory leak source
Long-term: Implement memory usage alerts and auto-remediation
EOF`}
            </pre>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Learning Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Professional Incident Response</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Developed systematic approach to incident management following
              established workflows. Learned to prioritize investigation steps,
              from basic health checks to root cause analysis, while maintaining
              clear documentation throughout the process.
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Multi-Tool Troubleshooting</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Mastered combining CLI tools (docker stats, curl, logs) with
              visual monitoring (Grafana) for comprehensive system analysis.
              Practiced cross-verification between different data sources to
              build complete understanding of system state.
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Log Analysis & Correlation</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learned to correlate application and database logs to isolate
              issues. Developed ability to distinguish between normal system
              operations and abnormal patterns indicating memory leaks or
              performance issues.
            </p>
          </article>
          <article className="rounded-lg border p-5">
            <h3 className="font-semibold">Verification Protocols</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Established comprehensive verification procedures to ensure
              complete incident resolution before closing tickets. Practiced
              multiple confirmation methods including health checks, metric
              verification, and user journey testing.
            </p>
          </article>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="rounded-lg border p-6 bg-muted/30">
        <h2 className="text-xl font-bold mb-4">Skills Demonstrated</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Incident Response</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Root Cause Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Container Management</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Log Analysis</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Diagnostics</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Problem Resolution</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Documentation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Verification Testing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Database Health Checks</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Docker Troubleshooting</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>API Endpoint Testing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Performance Analysis</span>
          </div>
        </div>
      </section>

      {/* Professional Impact */}
      <section className="mt-10">
        <div className="bg-card rounded-lg border p-6">
          <h2 className="text-xl font-bold mb-4">Professional Impact</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              This incident simulation demonstrates comprehensive Application
              Support Engineer capabilities: systematic troubleshooting,
              effective use of monitoring tools, clear documentation, and
              thorough verification practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="font-semibold text-sm mb-2">
                  Key Achievements:
                </h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>
                    Reduced mean time to resolution (MTTR) through systematic
                    approach
                  </li>
                  <li>
                    Demonstrated proficiency with log analysis and correlation
                  </li>
                  <li>Established reproducible incident response protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Business Value:</h3>
                <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Minimized customer impact through rapid diagnosis</li>
                  <li>
                    Improved system reliability with verification practices
                  </li>
                  <li>Enhanced team capabilities with documented procedures</li>
                </ul>
              </div>
            </div>
          </div>
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
