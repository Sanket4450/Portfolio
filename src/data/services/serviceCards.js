import backendDarkPNG from '../../assets/pngs/dark/backend.png'
import databaseDarkPNG from '../../assets/pngs/dark/database.png'
import frontendDarkPNG from '../../assets/pngs/dark/frontend.png'
import backendLightPNG from '../../assets/pngs/light/backend.png'
import databaseLightPNG from '../../assets/pngs/light/database.png'
import frontendLightPNG from '../../assets/pngs/light/frontend.png'

export const serviceCards = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Specialize in responsive and interactive front-end development using modern technologies.',
    image: {
      dark: frontendDarkPNG,
      light: frontendLightPNG,
    },
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'I can help you build a scalable, secure and maintainable backend for your web or mobile application.',
    image: {
      dark: backendDarkPNG,
      light: backendLightPNG,
    },
  },
  {
    id: 3,
    title: 'Database Management',
    description: 'I can help you manage and maintain your database to ensure high performance and security.',
    image: {
      dark: databaseDarkPNG,
      light: databaseLightPNG,
    },
  },
]
