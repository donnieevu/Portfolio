Donald Vu — Portfolio

Tracks: Application Support / Incident Labs • Data / Ops Analytics
Live site: https://donaldvu.com

Projects (quick links)

ASE Labs:
/projects/ase-projects/nginx-502-triage/ · /projects/ase-projects/memory-performance/ · /projects/ase-projects/fullincident-simulation/

Data/Ops:
See site’s Data Analyst Projects section and repo samples in healthcare_analytics_project/

Repo Structure
.
├─ portfolio_webpage/             # Next.js website (source for the live portfolio)
├─ healthcare_analytics_project/  # SQL/Python + dashboards (data/ops samples)
├─ learning/                      # notes / experiments / scratch
└─ README.md

Quick Start

Website

cd portfolio_webpage
npm install
npm run dev   # http://localhost:3000


(Optional) Run incident labs locally

docker compose up -d --build
curl -i http://localhost:8080/api/users   # baseline; note Date timestamp