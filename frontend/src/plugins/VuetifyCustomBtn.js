import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'myTheme',

    themes: {
      myTheme: {
        dark: false,

        colors: {
          jothisri:'#ff00dd',
          primary: '#000000',
          secondary: '#FF9800',
          success: '#00C853',
          error: '#D50000',
          warning: '#FFD600',
          info: '#00B8D4',
        },
      },
    },
  },

  defaults: {
    VBtn: {
      rounded: 'xxl',
      elevation: 5,
    },
  },
})

export default vuetify
