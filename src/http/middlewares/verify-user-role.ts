import { FastifyReply } from 'fastify/types/reply'
import { FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVerify: 'ADMIN' | 'MEMBER') {
  return async (request: FastifyRequest, replay: FastifyReply) => {
    const { role } = request.user

    if (role !== roleToVerify) {
      return replay.status(401).send({ message: 'Unauthorized.' })
    }
  }
}

// TODO: isso comentado é um middleware, mas a verificação vai ser feita de outra forma. estudar isso depois
// export async function verifyUserRole(
//   request: FastifyRequest,
//   replay: FastifyReply,
// ) {
//   const { role } = request.user

//   if (role !== 'ADMIN') {
//     return replay.status(401).send({ message: 'Unauthorized.' })
//   }
// }
