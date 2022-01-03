import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  Box,
  Heading,
  Text,
  FormControl,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';

import FormField from '@common/components/elements/FormField';
import FormTextareaField from '@common/components/elements/FormTextareaField';
import FormErrorSummary from '@common/components/elements/FormErrorSummary';
import {ContactUsType} from '@modules/About/types/ContactUs';
import AboutFormSchema from '@modules/About/schema/AboutFormSchema';
import {sendQuestion} from '@modules/About/services/about';

export default function AboutForm() {
  const {
    handleSubmit,
    register,
    formState: {errors, isSubmitting},
  } = useForm<ContactUsType>({
    resolver: yupResolver(AboutFormSchema),
  });

  const [serverError, setServerError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onSubmit = async (values: ContactUsType) => {
    try {
      setServerError('');
      setMessage('');
      await sendQuestion({...values, identifier: 'about-page'});
      setMessage('Your message has been sent. We will reply soon.');
    } catch (error) {
      setServerError('Something went wrong. Try again later.');
    }
  };

  return (
    <Box>
      <Heading
        fontSize={{base: 'mh4', md: 'th4', lg: 'h4'}}
        marginBottom={{base: '2.5rem'}}
      >
        Have questions? Give us a shout.
      </Heading>

      <form
        data-testid="about-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <FormControl
          isInvalid={errors.name && true}
          minHeight={{base: '4.3rem', lg: '5.0625rem'}}
        >
          <FormField
            type="text"
            id="name"
            label="Name"
            placeholder="Enter name"
            {...register('name')}
            ref={register('name').ref}
          />
          <FormErrorMessage
            m={0}
            color="orange.200"
            fontSize="0.8125rem"
            lineHeight="1.125rem"
          >
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.email && true}
          minHeight={{base: '4.3rem', lg: '5.0625rem'}}
        >
          <FormField
            type="email"
            id="email"
            label="Email"
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

        <FormControl
          isInvalid={errors.message && true}
          minHeight={{base: '4.3rem', lg: '5.0625rem'}}
        >
          <FormTextareaField
            id="message"
            rows="6"
            label="Let us know what you need"
            placeholder="Please enter the info you need..."
            {...register('message')}
            ref={register('message').ref}
          />

          <FormErrorMessage
            m={0}
            color="orange.200"
            fontSize="0.8125rem"
            lineHeight="1.125rem"
          >
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          data-testid="about-form-btn"
          isLoading={isSubmitting}
          type="submit"
          marginTop={{base: '1rem', md: '2.5rem'}}
          marginBottom="1rem"
          width={{base: 'full', md: '6.6875rem'}}
        >
          Submit
        </Button>

        {message && <Text color="success.100">{message}</Text>}
        <FormErrorSummary errors={errors} serverError={serverError} />
      </form>
    </Box>
  );
}
