import type { AuthConfig } from '@ioc:Adonis/Addons/Auth'

const authConfig: AuthConfig = {
  guard: 'api',

  guards: {
    api: {
      driver: 'oat',

      tokenProvider: {
        type: 'api',
        driver: 'database',
        table: 'api_tokens',
        foreignKey: 'user_id',
      },

      provider: {
        driver: 'lucid',
        identifierKey: 'id',

        // un project username based
        uids: ['username'],

        model: () => import('App/Models/User'),
      },
    },
  },
}

export default authConfig
