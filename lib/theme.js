import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Divider: {
    baseStyle: (props) => ({
      borderColor: mode("#000", "#fff")(props),
      opacity: 1,
      borderBottomWidth: "2px",
      border: 1,
    }),
  },
};

const fonts = {
  heading: `'Varela', sans-serif`,
  body: `'Varela', sans-serif`,
};

const theme = extendTheme({ config, styles, components, fonts });

export default theme;
