import { extendTheme } from "@chakra-ui/react"

import colors from "./color"
import { textStyles } from "./typography"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors,
  textStyles,
  config,
})

export default theme;