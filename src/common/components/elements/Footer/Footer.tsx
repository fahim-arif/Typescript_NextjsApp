import { Box, Flex } from "@chakra-ui/react";
import Mailer from "@modules/Mailer/components/Mailer";

export default function Footer() {
  return (
    <Box as="footer">
      <Flex align="center" justify="center" my={8}>
        <Mailer />
      </Flex>  
    </Box>
  );
}
