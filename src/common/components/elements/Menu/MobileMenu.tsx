import React from 'react';
import {Box, Container, Input, Stack, Text} from '@chakra-ui/react';
import Link from 'next/link';

type props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  onOpenNewsletter: () => void;
};

const MobileMenu: React.FC<props> = ({setIsOpen, isOpen, onOpenNewsletter}) => {
  const handleCollapse = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container>
      <Box
        onClick={handleCollapse}
        cursor="pointer"
        backgroundSize="cover"
        w={{base: '14.4px', sm: '25.4px'}}
        h={{base: '10.4px', sm: '20.4px'}}
        bgImage="url('/images/menu_bars.svg')"
      ></Box>
      {!isOpen && (
        <Box
          borderRadius="10px"
          onClick={(e) => e.stopPropagation()}
          height="100vh"
          width="100%"
          bgColor="#fff"
          position="absolute"
          top="60px"
          left="0"
          zIndex="1"
        >
          <Stack maxW="90%" mt={5} pl={{base: '50px', sm: 20}} spacing={3}>
            <Link href="/about">
              <a>
                <Text>About</Text>
              </a>
            </Link>

            <Text onClick={onOpenNewsletter}>Newsletter</Text>
            <Text onClick={onOpenNewsletter}>Login</Text>
            <Text onClick={onOpenNewsletter}>Register</Text>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default MobileMenu;
