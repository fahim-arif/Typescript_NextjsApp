import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Flex,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Box,
  Text,
  Button,
  Textarea,
  Input,
  Spacer,
} from "@chakra-ui/react";

import Navbar from "@root/common/components/elements/Navbar";
import Logo from "@root/common/components/elements/Logo/Logo";

export default function Home() {
  const [reason, setReason] = useState<string>("not_interested");
  const [otherReason, setOtherReason] = useState<string>("");

  return (
    <div className="app">
      <Head>
        <title>twomatches</title>
        <meta name="description" content="twomatches next app" />
      </Head>

      <Flex
        align="center"
        p="4"
        px="8"
        borderBottom="1px"
        borderColor="gray.100"
      >
        <Logo prefixId="nav" />
        <Spacer />
      </Flex>

      <Flex direction="column" padding="2rem">
        <Heading>Unsubscribe from the newsletter</Heading>
        <Text marginBottom="2rem">
          You will no longer receive marketing emails from this list.
        </Text>

        <Text fontWeight="medium" marginBottom="0.2rem">
          Email address
        </Text>
        <Input
          placeholder="Enter email address"
          width="sm"
          marginBottom="2rem"
        />

        <Text marginBottom="2rem" fontWeight="500">
          Please let us know why you want to unsubscribe:{" "}
        </Text>

        <RadioGroup onChange={setReason} value={reason}>
          <Stack direction="column">
            <Radio value="not_interested">
              I no longer want to receive these emails
            </Radio>
            <Radio value="too_many">I receive too many emails</Radio>
            <Radio value="not_signed_up">
              I never signed up for the mailing list
            </Radio>
            <Radio value="spam">The emails are spam</Radio>
            <Radio value="other">Other (fill in reason below)</Radio>
          </Stack>
        </RadioGroup>

        {reason === "other" && (
          <Textarea
            placeholder="Please enter your reason"
            width="md"
            marginTop="1rem"
            onChange={(e) => setOtherReason(e.target.value)}
          />
        )}

        <Button width="xs" marginTop="2rem">
          Submit
        </Button>
      </Flex>
    </div>
  );
}
