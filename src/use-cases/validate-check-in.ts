import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { CheckIn } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found'
import dayjs from 'dayjs'
import { LateCheckInValidationError } from './errors/late-check-in-validation-error'
interface ValidateCheckInCaseRequest {
  checkInId: string
}
interface ValidateCheckInCaseResponse {
  checkIn: CheckIn
}

export class ValidateCheckInCase {
  constructor(private checkInsRepository: CheckInsRepository) {}
  async execute({
    checkInId,
  }: ValidateCheckInCaseRequest): Promise<ValidateCheckInCaseResponse> {
    const checkIn = await this.checkInsRepository.findById(checkInId)

    if (!checkIn) {
      throw new ResourceNotFoundError()
    }
    const distanceinMinutesFromCheckInCreation = dayjs(new Date()).diff(
      checkIn.created_at,
      'minutes',
    )
    if (distanceinMinutesFromCheckInCreation > 20) {
      throw new LateCheckInValidationError()
    }
    checkIn.validated_at = new Date()
    await this.checkInsRepository.save(checkIn)
    return {
      checkIn,
    }
  }
}
