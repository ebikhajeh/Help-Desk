import express from 'express'
import cors from 'cors'
import { toNodeHandler } from 'better-auth/node'
import { prisma } from './lib/prisma'
import { auth } from './lib/auth'
import { requireAuth } from './middleware/requireAuth'

const app = express()
const PORT = process.env.PORT || 5000

// Must be before express.json()
app.all('/api/auth/*', (req, res, next) => {
  toNodeHandler(auth)(req, res).catch(next)
})

app.use(cors())
app.use(express.json())

app.get('/api/me', requireAuth, (req, res) => {
  res.json({ user: req.user, session: req.session })
})

app.get('/api/health', requireAuth, async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', database: 'connected' })
  } catch {
    res.status(503).json({ status: 'ok', database: 'disconnected' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
