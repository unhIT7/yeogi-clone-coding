/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
/* import { VuetifyDateAdapter } from 'vuetify/date/adapters/vuetify'; */

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#e2635e',
          secondary: '#3471dc',
        },
      },
    },
  },
  defaults: {
    VBtn: { variant: 'text' },
    VContainer: { paddingAll: 0 },
  },
  /* date: {
    adapter: VuetifyDateAdapter,
  }, */
});