import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcryptjs'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

// TODO: usar o nome do caso de uso do test com sut, isso é um pattern em testes
// sut ? system under test

let usersRepository: InMemoryUsersRepository
let sut: AuthenticateUseCase
describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AuthenticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'victor',
      email: 'mattos@mattos.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      email: 'mattos@mattos.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with email', async () => {
    expect(() =>
      sut.execute({
        email: 'mattos@mattos.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should not be able to authenticate with password', async () => {
    await usersRepository.create({
      name: 'victor',
      email: 'mattos@mattos.com',
      password_hash: await hash('123456', 6),
    })

    expect(() =>
      sut.execute({
        email: 'mattos@mattos.com',
        password: '12343556',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})
