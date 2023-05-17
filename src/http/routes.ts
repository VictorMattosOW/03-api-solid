import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'
import { profile } from './controllers/profile'
import { verifyJWT } from './middlewares/verify.jwt'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  // tentar criar as rotas com um nome semantico TODO: estudar um pouco mais sobre
  app.post('/sessions', authenticate)

  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
