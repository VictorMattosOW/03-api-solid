export class UserAlreadyExistesError extends Error {
  constructor() {
    super('E-mail already exists.')
  }
}
