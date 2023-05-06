import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repostories'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const prismaUsersRespository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismaUsersRespository)

  return authenticateUseCase
}
