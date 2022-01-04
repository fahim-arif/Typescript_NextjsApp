import React from 'react';
import {Circle} from '@chakra-ui/react';

import ArrowUp from '@common/components/elements/ArrowUp';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Circle
      as="button"
      display="flex"
      size="3.375em"
      bg="grayScale.100"
      color="white"
      cursor="pointer"
      _hover={{
        bg: 'grayScale.200',
      }}
      onClick={scrollToTop}
    >
      <ArrowUp />
    </Circle>
  );
}
