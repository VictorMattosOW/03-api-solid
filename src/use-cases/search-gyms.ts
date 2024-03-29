import { GymsRepository } from '@/repositories/gym-repository'
import { Gym } from '@prisma/client'

interface SearchGymsUseCaseRequest {
  query: string
  page: number
}

interface SearchGymsUserCaseResponse {
  gyms: Gym[]
}

export class SearchGymsUseCase {
  // inversao de dependencia, eu trago a dependencia via parametro no construtor
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    query,
    page,
  }: SearchGymsUseCaseRequest): Promise<SearchGymsUserCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return {
      gyms,
    }
  }
}
