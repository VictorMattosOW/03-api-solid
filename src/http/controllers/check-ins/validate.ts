import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'
import { FastifyRequest } from 'fastify'
import { FastifyReply } from 'fastify/types/reply'
import { z } from 'zod'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckInParamsSchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckInParamsSchema.parse(request.params)

  const validateCheckInUseCase = makeValidateCheckInUseCase()

  await validateCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
