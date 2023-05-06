import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)

// quando uma função recebe um parametro mas não é utilizado, colocamos um (_) ou (_request) no lugar do parametro
app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: Here we shold log to an external tool like DataDog/NewRelic/Sentry.
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
