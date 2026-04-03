# Help Desk — Project Memory

## Project Overview
AI-powered ticket management system. Receives support emails, auto-classifies them, generates summaries, and suggests replies using the Claude API. Agents handle escalations; the system handles the rest.

## Tech Stack
- **Frontend**: React 18, TypeScript, React Router v6, Tailwind CSS v4, Vite
- **Backend**: Node.js, Express, TypeScript, Bun (runtime + package manager)
- **Database**: PostgreSQL, Prisma ORM
- **AI**: Claude API (`claude-sonnet-4-6`) — classification, summaries, suggested replies
- **Email**: SendGrid or Mailgun (TBD) — inbound parsing + outbound sending
- **Infrastructure**: Docker, AWS

## Monorepo Structure
```
Help Desk/
├── client/       # React frontend (port 3000)
├── server/       # Express backend (port 5000)
├── CLAUDE.md
└── package.json  # Bun workspaces root
```

## Running the Project
```bash
# Backend
cd server && bun run dev

# Frontend
cd client && bun run dev
```

## Key Conventions
- All API routes are prefixed with `/api`
- Vite proxies `/api/*` to `http://localhost:5000` in dev
- Bun runs TypeScript natively on the server — no ts-node needed

## User Roles
- `admin` — seeded on deployment; manages agents
- `agent` — created by admin; handles tickets

## Ticket Statuses
`open` → `resolved` → `closed`

## Ticket Categories
- general question
- technical question
- refund request

## Documentation
Always use **context7** to fetch up-to-date documentation before implementing anything involving a library or framework. Do not rely on training data for library APIs.

### Context7 Library IDs
| Library | ID |
|---|---|
| Bun | `/oven-sh/bun` |
| Express | `/expressjs/express` |
| React | `/reactjs/react.dev` |
| Vite | `/vitejs/vite` |
| Prisma | `/prisma/prisma` |
| React Router | `/remix-run/react-router` |
| Tailwind CSS | `/tailwindlabs/tailwindcss.com` |

### How to use context7
1. Call `mcp__context7__resolve-library-id` with the library name to confirm the ID
2. Call `mcp__context7__query-docs` with the library ID and a specific topic
