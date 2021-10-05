import { Text } from "@chakra-ui/react";

export default function FormErrorSummary({ errors, serverError }) {
  if (Object.keys(errors).length === 0 && !serverError) {
    return null;
  }

  return (
    <Text color="red.400" mb={4}>
      {!serverError
        ? "Please correct the highlighted fields below and try again"
        : serverError}
    </Text>
  );
}
