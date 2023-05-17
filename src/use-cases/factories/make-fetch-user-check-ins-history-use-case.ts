import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryUseCase() {
  const prismaCheckInRepository = new PrismaCheckInsRepository()
  const fetchUserCheckInHistoryUseCase = new FetchUserCheckInHistoryUseCase(
    prismaCheckInRepository,
  )

  return fetchUserCheckInHistoryUseCase
}
