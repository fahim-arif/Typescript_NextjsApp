const Button = {
  baseStyle: {
    color: "white",
    fontFamily: "Barlow",
    fontWeight: "500",
    borderRadius: "none",
  },

  sizes: {
    md: {
      height: "3.375rem",
      py: "1.1875rem",
    },
  },

  variants: {
    solid: {
      bg: "grayScale.100",
      _hover: {
        bg: "grayScale.200",
      },
      _disabled: {
        bg: "grayScale.600",
        color: "grayScale.100",
      },
    },
  },
};

export default Button;
