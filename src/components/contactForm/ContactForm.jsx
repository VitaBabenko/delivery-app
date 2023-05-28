import { Form } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <Form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Phone:
        <input type="text" />
      </label>
      <label>
        Address:
        <input type="text" />
      </label>
    </Form>
  );
};
