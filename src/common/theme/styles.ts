import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {},

      // styles for the `a`
      a: {},
    },
  },
});
