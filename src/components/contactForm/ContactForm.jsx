import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  Form,
  Wrap,
  Wrapper,
  FormField,
  BtnSubmit,
  ErrorMessage,
  SubmitWrap,
} from './ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces!'
    ),
  email: Yup.string().email('Invalid email address').required('Required'),
  phone: Yup.string()
    .required('Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!'
    ),
  address: Yup.string().required('Required'),
});

export const ContactForm = ({ total, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <Wrapper>
          <Wrap>
            <FormField>
              Name
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="span" />
            </FormField>
            <FormField>
              Email
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="span" />
            </FormField>
            <FormField>
              Phone
              <Field name="phone" type="phone" />
              <ErrorMessage name="phone" component="span" />
            </FormField>
            <FormField>
              Address
              <Field name="address" type="text" />
              <ErrorMessage name="address" component="span" />
            </FormField>
          </Wrap>
        </Wrapper>
        <SubmitWrap>
          <h3>Total price: {total}</h3>
          <BtnSubmit type="submit">Submit</BtnSubmit>
        </SubmitWrap>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  total: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
