import { HStack, Text } from "@chakra-ui/react";
import FormErrorIcon from "../FormErrorIcon";

export default function FormErrorSummary({ errors, serverError, ...props }) {
  if (Object.keys(errors).length === 0 && !serverError) {
    return null;
  }

  return (
    <HStack {...props}>
      <FormErrorIcon color="orange.200" />
      <Text
        data-testid="form-error-summary"
        color="orange.200"
        lineHeight="1.375rem"
        mb={4}
      >
        {!serverError
          ? "Please correct the highlighted fields and try again."
          : serverError}
      </Text>
    </HStack>
  );
}
