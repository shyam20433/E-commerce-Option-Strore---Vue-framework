import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
    try {
      await auth.use('api').authenticate()
    } catch (error) {
      console.log('AUTH ERROR:', error.message)

      return response.unauthorized({
        message: 'Invalid token',
      })
    }

    await next()
  }
}
