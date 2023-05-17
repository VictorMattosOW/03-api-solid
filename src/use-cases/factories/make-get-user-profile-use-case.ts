import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repostories'
import { GetUserProfileUseCase } from '../get-user-profile'

export function makeGetUserProfileUseCase() {
  const prismaUsersRespository = new PrismaUsersRepository()
  const getUserProfileUseCase = new GetUserProfileUseCase(
    prismaUsersRespository,
  )

  return getUserProfileUseCase
}
