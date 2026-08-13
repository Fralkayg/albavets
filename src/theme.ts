import { createTheme } from '@mui/material/styles'
import { esES } from '@mui/material/locale'

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#0d9488',
        light: '#5eead4',
        dark: '#115e59',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#f59e0b',
        contrastText: '#1f2937',
      },
      background: {
        default: '#fffdf8',
        paper: '#ffffff',
      },
      text: {
        primary: '#1f2937',
        secondary: '#4b5563',
      },
    },
    shape: {
      borderRadius: 16,
    },
    // Aligned with Tailwind's default breakpoints so `sx` and Tailwind
    // responsive utilities agree on when content shows/hides.
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    typography: {
      fontFamily: '"Nunito Sans", ui-sans-serif, system-ui, sans-serif',
      h1: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
      h2: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
      h3: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 700 },
      h4: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Quicksand", ui-sans-serif, system-ui, sans-serif', fontWeight: 600 },
      button: { fontWeight: 700, textTransform: 'none' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          },
        },
      },
    },
  },
  esES,
)

export default theme
