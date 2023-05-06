import { FastifyInstance } from 'fastify'
import { register } from './controllers/register'
import { authenticate } from './controllers/authenticate'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register)
  // tentar criar as rotas com um nome semantico TODO: estudar um pouco mais sobre
  app.post('/sessions', authenticate)
}
