const Button = {
  baseStyle: {
    color: 'white',
    fontFamily: 'Barlow',
    fontWeight: '500',
    borderRadius: 'none',
  },

  sizes: {
    md: {
      paddingX: '2.25rem',
      paddingY: '1.85rem',
    },
  },

  variants: {
    solid: {
      bg: 'grayScale.100',
      _hover: {
        bg: 'grayScale.200',
      },
      _disabled: {
        bg: 'grayScale.600',
        color: 'grayScale.100',
      },
    },
    outline: {
      borderWidth: '1px',
      borderColor: 'grayScale.500',
      _hover: {
        backgroundColor: 'transparent',
        borderColor: 'grayScale.200',
      },
    },
  },
};

export default Button;
