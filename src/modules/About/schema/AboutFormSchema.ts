import * as yup from 'yup';

const AboutFormSchema = yup.object().shape({
  name: yup.string().trim().required().min(2).max(255),
  email: yup.string().trim().required().max(320).email(),
  message: yup.string().required().min(1).max(500),
});

export default AboutFormSchema;
