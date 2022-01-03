import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  Box,
  Button,
  Heading,
  Text,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';

import FormField from '@common/components/elements/FormField';
import FormErrorSummary from '@common/components/elements/FormErrorSummary';
import {createSubscriber} from '@modules/Mailer/services/mailer';
import MailerSchema from '@modules/Mailer/schema/Mailer';
import {SubscriberCreate} from '@modules/Mailer/types/Mailer';

export default function MailerModal({isOpen, onClose}) {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm<SubscriberCreate>({
    resolver: yupResolver(MailerSchema),
  });

  const [message, setMessage] = useState<string>('');
  const [serverError, setServerError] = useState<string>('');

  const isNewSubscription = (subscribe_date: Date) => {
    const today = new Date();
    return (
      today.getFullYear() === subscribe_date.getFullYear() &&
      today.getMonth() === subscribe_date.getMonth() &&
      today.getDate() === subscribe_date.getDate()
    );
  };

  const formatDate = (date: Date) => {
    const month = date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  const onSubmit = async (values: SubscriberCreate) => {
    try {
      setMessage('');
      setServerError('');
      
      const subscriber = await createSubscriber(values);
      const subscribe_date = new Date(subscriber.subscribe_date);

      if (isNewSubscription(subscribe_date)) {
        setMessage("You've subscribed to the newsletter successfully");
      } else {
        setMessage(`You're currently subscribed to our newsletter since ${formatDate(subscribe_date)}`);
      }

    } catch (error) {
      setServerError(
        'We’re sorry, we’re having trouble getting your email address added. Please try again at a later time.'
      );
    }
  };

  return (
    <Modal
      size="3xl"
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc={false}
      scrollBehavior="outside"
    >
      <ModalOverlay bgColor="#090D28" />
      <ModalContent
        marginX="2rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <ModalCloseButton />
        <ModalHeader
          width={{base: 'full', md: '33rem'}}
          marginTop="4rem"
          textAlign="center"
        >
          <Heading
            color="grayScal.100"
            fontSize={{base: 'mh3', md: 'th3', lg: 'h3'}}
          >
            Subscribe to the newsletter
          </Heading>
        </ModalHeader>

        <ModalBody
          width={{base: 'full', md: '33rem'}}
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <Text
            id="mailer-form-title "
            lineHeight="1.375rem"
            color="grayScale.300"
            marginBottom={{base: '1.75rem', lg: '2.25rem'}}
          >
            Get emails about updates and articles relating to the product
          </Text>

          <form
            data-testid="mailer-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <FormControl
              isInvalid={errors.first_name && true}
              minHeight={{base: '4.3rem', lg: '5.0625rem'}}
            >
              <FormField
                type="text"
                id="first_name"
                label="Name"
                placeholder="Enter first name"
                {...register('first_name')}
                ref={register('first_name').ref}
              />
              <FormErrorMessage
                m={0}
                color="orange.200"
                fontSize="0.8125rem"
                lineHeight="1.125rem"
              >
                {errors.first_name && errors.first_name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.last_name && true}
              minHeight={{base: '4.3rem', lg: '5.0625rem'}}
            >
              <FormField
                type="text"
                id="last_name"
                label="Last name"
                placeholder="Enter last name"
                {...register('last_name')}
                ref={register('last_name').ref}
              />

              <FormErrorMessage
                m={0}
                color="orange.200"
                fontSize="0.8125rem"
                lineHeight="1.125rem"
              >
                {errors.last_name && errors.last_name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.contact_no && true}
              minHeight={{base: '4.3rem', lg: '5.0625rem'}}
            >
              <FormField
                type="text"
                id="contact_no"
                label="Contact number (optional)"
                placeholder="Enter contact number"
                {...register('contact_no')}
                ref={register('contact_no').ref}
              />

              <FormErrorMessage
                m={0}
                textAlign="left"
                color="orange.200"
                fontSize="0.8125rem"
                lineHeight="1.125rem"
              >
                {errors.contact_no && errors.contact_no.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.email && true}
              minHeight={{base: '4.3rem', lg: '5.0625rem'}}
            >
              <FormField
                type="text"
                id="subscriber_email"
                label="Email address"
                placeholder="Enter email address"
                {...register('email')}
                ref={register('email').ref}
              />

              <FormErrorMessage
                m={0}
                color="orange.200"
                fontSize="0.8125rem"
                lineHeight="1.125rem"
              >
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <Box
              position="relative"
              minHeight={{base: '5rem', sm: '5.5rem', md: '28'}}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                data-testid="subscribe-btn"
                isLoading={isSubmitting}
                type="submit"
                width={{base: 'full', md: '16.25rem'}}
                marginTop="2rem"
                marginBottom="1rem"
              >
                Subscribe
              </Button>

              <Box textAlign="start" marginBottom="1rem">
                {message && (
                  <Text
                    data-testid="success-msg"
                    align="left"
                    color="success.100"
                  >
                    {message}
                  </Text>
                )}
                <FormErrorSummary errors={errors} serverError={serverError} />
              </Box>

              <Box></Box>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
