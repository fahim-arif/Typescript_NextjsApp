import { HStack, Text } from "@chakra-ui/react";
import FormErrorIcon from "../FormErrorIcon";

export default function FormErrorSummary({ errors, serverError, ...props }) {
  if (Object.keys(errors).length === 0 && !serverError) {
    return null;
  }

  return (
    <HStack {...props} alignItems={{ base: "start", sm: "center" }}>
      <FormErrorIcon color="orange.200" marginY={{ base: "0.75rem", sm: 0 }} />
      <Text
        data-testid="form-error-summary"
        color="orange.200"
        fontSize="0.9375rem"
        lineHeight="1.375rem"
        marginBottom={4}
        paddingY={2}
      >
        {!serverError
          ? "Please correct the highlighted fields and try again."
          : serverError}
      </Text>
    </HStack>
  );
}
