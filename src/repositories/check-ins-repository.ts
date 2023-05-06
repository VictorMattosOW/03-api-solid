import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  // find By retorna 1 unico registo
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  // find many retorna uma lista
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  countByUserId(userId: string): Promise<number>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
