# Asakta Demo CRM

A full-stack **Leads & Tasks CRM** built to showcase React + FastAPI (with optional PHP) and CI/CD skills.

## Features
- React dashboard with Tailwind, KPIs and Recharts
- CRUD for leads, search + filters
- FastAPI backend with SQLite (SQLAlchemy)
- Optional PHP API (PDO + SQLite)
- Dockerized services + GitHub Actions CI

## Run
```bash
docker compose up --build
# Frontend: http://localhost:5173
# API:      http://localhost:8000/health
```
(Optional) seed:
```bash
docker compose exec api python -c "from backend.seed import *"
```

## Env
Frontend reads `VITE_API_BASE` (defaults to http://localhost:8000).
