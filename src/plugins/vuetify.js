import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
})
