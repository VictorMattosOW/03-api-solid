import { FastifyInstance } from 'fastify'
import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJWT } from '@/http/middlewares/verify.jwt'
import { refresh } from './refresh'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', register)
  // tentar criar as rotas com um nome semantico TODO: estudar um pouco mais sobre
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)
  /** Authenticated */
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
