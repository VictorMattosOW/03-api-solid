import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { GetUserProfileUseCase } from './get-user-profile'
import { ResourceNotFoundError } from './errors/resource-not-found'

// TODO: usar o nome do caso de uso do test com sut, isso é um pattern em testes
// sut ? system under test

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase
describe('Get user profile Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able to get profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'victor',
      email: 'mattos@mattos.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('victor')
  })

  it('should not be able to get user profile', async () => {
    await expect(() =>
      sut.execute({
        userId: 'invalid id',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
