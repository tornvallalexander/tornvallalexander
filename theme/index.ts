import { extendTheme } from "@chakra-ui/react"

import colors from "./color"
import { textStyles } from "./typography"

const theme = extendTheme({
  colors,
  textStyles,
})

export default theme;