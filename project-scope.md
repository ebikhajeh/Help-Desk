##problems

We receive hundreds of support emails daily. Our agents manually read, classify, and respond to each ticket, which is slow and leads to impersonal, canned responses


##solusions

Build a ticket management system that uses AI to automatically classify, respond to, and route support tickets, delivering faster, more personalized responses to students, while freeing up agents for complex issues.


##features

Receive support emails and automatically create tickets
Auto-generate human-friendly responses using a knowledge base
Ticket list with filtering and sorting
Ticket detail view
AI-powered ticket classification
AI-generated summaries for tickets
AI-suggested replies for agents
User management (admin only)
Dashboard to view and manage all tickets


##ticket statuses

- open
- resolved
- closed


##ticket categories

- general question
- technical question
- refund request


##tech stack

**Frontend**
- React with TypeScript
- React Router
- Tailwind CSS

**Backend**
- Node.js with Express and TypeScript

**Database**
- PostgreSQL
- Prisma ORM

**AI**
- Claude API (claude-sonnet-4-6) — ticket classification, summaries, suggested replies

**Email**
- SendGrid or Mailgun (TBD) — sending and/or receiving emails

**Infrastructure**
- Docker — containerized local dev and production builds
- AWS — cloud deployment


##user roles

- admin: seeded on deployment; can create and manage agents
- agent: created by admin; handles ticket responses