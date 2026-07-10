import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Admin {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    const user = auth.use('api').user

    if (!user) {
      return response.unauthorized({
        message: 'Invalid token',
      })
    }

    if (user.role !== 'admin') {
      return response.forbidden({
        message: 'Admin access required',
      })
    }

    await next()
  }
}
