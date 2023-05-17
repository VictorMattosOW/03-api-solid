import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInCase } from '../validate-check-in'

export function makeValidateCheckInUseCase() {
  const prismaCheckInRepository = new PrismaCheckInsRepository()
  const validateCheckInCase = new ValidateCheckInCase(prismaCheckInRepository)

  return validateCheckInCase
}
