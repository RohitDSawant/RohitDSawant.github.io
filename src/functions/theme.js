
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config,
    colors: {
        brand: {
          100: "#f7fafc",
          // ...
          900: "#1a202c",
        },
      }, })

export default theme

