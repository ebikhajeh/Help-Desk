import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '../src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Role } from '../src/types/role'

const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error('Missing SEED_ADMIN_EMAIL or SEED_ADMIN_PASSWORD env vars')
  process.exit(1)
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

// Separate instance without disableSignUp so we can create users
const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: { enabled: true },
})

const existing = await prisma.user.findUnique({ where: { email: ADMIN_EMAIL } })

if (existing) {
  console.log(`Admin user already exists: ${ADMIN_EMAIL}`)
  process.exit(0)
}

await auth.api.signUpEmail({
  body: { email: ADMIN_EMAIL, name: 'Admin', password: ADMIN_PASSWORD },
  headers: new Headers(),
})

await prisma.user.update({
  where: { email: ADMIN_EMAIL },
  data: { role: Role.Admin },
})

console.log(`Admin user created: ${ADMIN_EMAIL}`)

await prisma.$disconnect()
