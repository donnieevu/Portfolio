// app/projects/ase-projects/fullincident-simulation/page.tsx
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

export default function DatabaseCredentialRotationPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imgBase = "/images/ase-projects/db-pw-rotation";

  return (
    <main className="container mx-auto px-4 py-10 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Database Credential Rotation Incident
        </h1>
        <Link
          href="/projects/ase-projects"
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back to ASE Projects
        </Link>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        End-to-end incident response for a realistic outage: a{" "}
        <strong>database credential rotation</strong> occurred in Postgres while
        the application still used the old secret. The result was 500s on
        DB-backed routes. I scoped by timestamp, reproduced once, correlated
        logs, mitigated safely, validated recovery, and wrote a short rotation
        checklist to prevent repeats.
      </p>

      {/* Quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Stack</h3>
          <p className="text-sm text-muted-foreground">
            Docker • Nginx • Flask • Postgres • Linux
          </p>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">What I Did</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Captured baseline behavior & timestamp window</li>
            <li>Rotated the DB password to simulate an outage</li>
            <li>
              Correlated 500s on <code>/api/users</code> with{" "}
              <code>FATAL auth</code> in app logs
            </li>
            <li>
              Mitigated by restoring the secret or updating the app secret +
              restart
            </li>
            <li>Validated 200s and a clean log window after recovery</li>
            <li>Published a DB-secret rotation checklist</li>
          </ul>
        </div>
        <div className="bg-card rounded-lg border p-5">
          <h3 className="font-semibold mb-2">Incident Timeline</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
            <li>Baseline: routes 200</li>
            <li>Rotate DB password → 500s on users API</li>
            <li>Logs show Postgres authentication failures</li>
            <li>Rollback/secret update → app restart</li>
            <li>Recovery validated; log window clean</li>
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
              1) Baseline & Scope
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Confirm all services are healthy and take a quick baseline (
              <code>/api/users</code> 200). Note the Date header / timestamp
              window to align evidence in logs and future requests.
            </p>
            <Shot
              src={`${imgBase}/01-fis-containers-up.png`}
              alt="Baseline: docker compose ps shows all services up"
              caption="Baseline: services up before any credential changes."
              onClick={() =>
                setSelectedImage(`${imgBase}/01-fis-containers-up.png`)
              }
            />
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              2) Introduce Change → Reproduce Failure
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Rotate the DB password in Postgres while the app still uses the
              old secret. DB-backed routes flip to 500; capture the failures in
              the same timestamp window as the credential change.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/02-fis-rotate-db-pw.png`}
                alt="ALTER USER postgres WITH PASSWORD — credential rotation"
                caption="Outage introduced: Postgres password is rotated while the app still has the old secret."
                onClick={() =>
                  setSelectedImage(`${imgBase}/02-fis-rotate-db-pw.png`)
                }
              />
              <Shot
                src={`${imgBase}/03-fis-app-log-auth-fail.png`}
                alt="App logs: GET /users 500 and FATAL: password authentication failed"
                caption={
                  <>
                    Failure window: <code>GET /api/users</code> returns 500 and
                    app logs show <code>FATAL</code> password authentication
                    failures from Postgres.
                  </>
                }
                onClick={() =>
                  setSelectedImage(`${imgBase}/03-fis-app-log-auth-fail.png`)
                }
              />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              3) Mitigation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              The quickest mitigation is to restore the previous credential so
              the app and DB match again. Alternatively, update the app secret
              to the new password and restart the app to pick it up.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <Shot
                src={`${imgBase}/04-fis-rollback.png`}
                alt="Rollback command to restore credential or update app secret and restart"
                caption="Mitigation: restore the original DB password (or update the app secret and restart the app)."
                onClick={() =>
                  setSelectedImage(`${imgBase}/04-fis-rollback.png`)
                }
              />
              <Shot
                src={`${imgBase}/05-fis-rollback-success.png`}
                alt="ALTER ROLE success confirmation after rollback"
                caption="Rollback confirmed in Postgres: ALTER ROLE completed successfully."
                onClick={() =>
                  setSelectedImage(`${imgBase}/05-fis-rollback-success.png`)
                }
              />
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">
              4) Recovery Validation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Re-test <code>/api/users</code> to confirm 200s, and tail logs to
              ensure the window is clean (no new auth failures). Document the
              incident and add the rotation checklist so future password changes
              don&apos;t cause surprise outages.
            </p>
            <Shot
              src={`${imgBase}/06-fis-logs-clean-windows.png`}
              alt="Post-fix log tail: no new authentication failures"
              caption="Clean window after fix: follow-up requests succeed and there are no new DB auth failures in the logs."
              onClick={() =>
                setSelectedImage(`${imgBase}/06-fis-logs-clean-windows.png`)
              }
            />
          </div>
        </div>
      </section>

      {/* Commands */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Key Commands Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">Repro &amp; Evidence</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Baseline
curl -i http://localhost:8080/api/users

# Introduce outage (DB rotation only)
docker compose exec db psql -U postgres -d appdb -c \
"ALTER USER postgres WITH PASSWORD 'WrongNow#1';"

# Failure & logs (aligned by timestamp)
curl -i http://localhost:8080/api/users      # expect 500
docker compose logs --timestamps --tail=50 app | grep -Ei "FATAL|auth|psycopg2"`}</pre>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-semibold mb-3">Mitigation &amp; Validation</h3>
            <pre className="text-xs md:text-sm overflow-auto bg-muted p-4 rounded">{`# Fast rollback
docker compose exec db psql -U postgres -d appdb -c \
"ALTER USER postgres WITH PASSWORD 'postgres';"

# OR rotate app secret to the new value, then:
docker compose up -d --build app

# Validate recovery
curl -i http://localhost:8080/api/users      # expect 200
docker compose logs --timestamps --since=2m app`}</pre>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="rounded-lg border p-6 bg-muted/30">
        <h2 className="text-xl font-bold mb-4">Outcome &amp; Prevention</h2>
        <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
          <li>
            Outage localized to a DB credential mismatch between app and
            Postgres; recovered quickly once secrets were aligned.
          </li>
          <li>
            Added a <strong>DB-secret rotation checklist</strong>: update app
            secret → restart → smoke test → record timestamp.
          </li>
          <li>
            Set a simple alert on 5xx/auth-fail spikes to catch this class of
            issues early in production.
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
