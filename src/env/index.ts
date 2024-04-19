import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
})

const envParsed = envSchema.safeParse(import.meta.env)

if (envParsed.success === false) {
  console.log('⚠️ Invalid environment variables.', envParsed.error.format())
  throw new Error('⚠️ Invalid environment variables.')
}

export const env = envParsed.data
