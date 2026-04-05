import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { bearer } from 'better-auth/plugins'
import { prisma } from './prisma'
import { Role } from '../types/role'

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: 'postgresql' }),
  emailAndPassword: { enabled: true, disableSignUp: true },
  trustedOrigins: ['http://localhost:3000'],
  plugins: [bearer()],
  user: {
    additionalFields: {
      role: {
        type: 'string',
        defaultValue: Role.Agent,
        input: false,
      },
    },
  },
})
