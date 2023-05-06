import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repostories'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const prismaUsersRespository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(prismaUsersRespository)

  return registerUseCase
}
