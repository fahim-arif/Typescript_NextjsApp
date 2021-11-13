import { extendTheme } from "@chakra-ui/react";

import Button from "./components/Button";
import Heading from "./components/Heading";
import Text from "./components/Text";

const theme = extendTheme({
  components: {
    Text,
    Button,
    Heading,
  },
  fonts: {
    heading: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    inter: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    barlow: `Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  fontSizes: {
    cap: "0.875rem",
    body: "1rem",
    h6: "1.125rem",
    h5: "1.5rem",
    h4: "1.75rem",
    h3: "2.25rem",
    h2: "2.875rem",
    h1: "3.5rem",
    mbody: "0.9375rem",
    mh6: "1.125rem",
    mh5: "1.1875rem",
    mh4: "1.375rem",
    mh3: "1.625rem",
    mh2: "2rem",
    mh1: "2.375rem",
  },
  colors: {
    grayScale: {
      100: "#090D28",
      200: "#3A3D53",
      300: "#6B6E7E",
      400: "#9D9EA9",
      500: "#CECFD4",
      600: "#E6E7EA",
      700: "#F5F5F7",
      800: "#FAFAFA",
      900: "#FFFFFF",
    },
    orange: {
      100: "#AE0000",
      200: "#D20606",
      300: "#FC2D00",
      400: "#FD5733",
      500: "#FD8166",
      600: "#FEAB99",
      700: "#FED5CC",
    },
  },
  space: {
    11: "2.75rem",
    12.5: "3.125rem",
    13: "3.25rem",
  },
});

export default theme;
