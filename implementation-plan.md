## Implementation Plan


---


## Phase 1 — Project Setup

Goal: establish the monorepo structure, tooling, and local dev environment.

- [ ] Initialize monorepo (client + server folders)
- [ ] Scaffold backend: Node.js + Express + TypeScript
- [ ] Scaffold frontend: React + TypeScript 
- [ ] Setup PostgresSQL database


---


## Phase 2 — Database & Schema

Goal: define and migrate the core data models.

- [ ] Install and configure Prisma
- [ ] Define schema: User, Ticket, Category, Status
- [ ] Write and run initial migration
- [ ] Seed database with admin user and ticket categories
- [ ] Verify Prisma client generates correctly


---


## Phase 3 — Authentication & User Management

Goal: secure the app with role-based auth; allow admin to manage agents.

- [ ] Implement JWT-based auth (login, logout, token refresh)
- [ ] Password hashing with bcrypt
- [ ] Auth middleware for protected routes
- [ ] Role-based access control (admin vs. agent)
- [ ] Admin endpoints: create agent, list agents, deactivate agent
- [ ] Frontend: login page
- [ ] Frontend: protected route wrapper (redirect if unauthenticated)
- [ ] Frontend: admin user management page


---


## Phase 4 — Ticket Management (Core CRUD)

Goal: agents can view, filter, and manage tickets manually before any automation.

- [ ] Backend: create ticket endpoint
- [ ] Backend: list tickets endpoint (with filters: status, category; sorting: date, status)
- [ ] Backend: get ticket by ID endpoint
- [ ] Backend: update ticket status endpoint (open → resolved → closed)
- [ ] Backend: assign ticket to agent endpoint
- [ ] Frontend: ticket list page with filter and sort controls
- [ ] Frontend: ticket detail page (view subject, body, status, category, assignee)
- [ ] Frontend: status update controls on detail page


---


## Phase 5 — Email Integration

Goal: emails from students automatically create tickets; agents can reply via the system.

- [ ] Choose and configure email provider (SendGrid or Mailgun)
- [ ] Set up inbound email parsing (webhook)
- [ ] Backend: webhook endpoint to receive inbound emails and create tickets
- [ ] Parse email fields: sender, subject, body, thread ID
- [ ] Handle reply threading (incoming reply updates existing ticket instead of creating a new one)
- [ ] Backend: send email reply endpoint (triggered when agent submits a response)
- [ ] Test full inbound → ticket → reply flow


---


## Phase 6 — AI Integration

Goal: automate classification, summarization, and reply suggestions using Claude.

- [ ] Install and configure Claude API client
- [ ] AI service: classify ticket into category (general question / technical question / refund request)
- [ ] AI service: generate a short ticket summary
- [ ] AI service: generate a suggested reply for the agent
- [ ] Trigger classification and summary automatically when a ticket is created
- [ ] Expose suggested reply on the ticket detail page (agent can edit before sending)
- [ ] Handle AI errors gracefully (fallback to manual if API fails)


---


## Phase 7 — Dashboard

Goal: give agents and admins a high-level view of ticket activity.

- [ ] Backend: stats endpoint (total tickets, count by status, count by category)
- [ ] Frontend: dashboard page with summary cards (open, resolved, closed counts)
- [ ] Frontend: recent tickets list on dashboard
- [ ] Frontend: filter dashboard stats by date range


---


## Phase 8 — Deployment (AWS)

Goal: ship a production-ready, containerized deployment on AWS.

- [ ] Write production Dockerfile for backend
- [ ] Write production Dockerfile for frontend (static build served via Nginx)
- [ ] Push images to AWS ECR
- [ ] Provision AWS RDS (PostgreSQL) instance
- [ ] Deploy containers to AWS ECS (Fargate)
- [ ] Configure environment variables in ECS task definitions
- [ ] Set up AWS SES or confirm SendGrid/Mailgun for production email
- [ ] Point domain and configure HTTPS (ACM + ALB)
- [ ] Run production database migration and admin seed
- [ ] Smoke test full flow in production
