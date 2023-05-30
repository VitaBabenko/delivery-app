import styled from 'styled-components';

import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  padding: 15px;
  width: 400px;
`;

export const Wrap = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin-bottom: 25px;
`;

export const BtnSubmit = styled.button`
  display: block;
  width: 150px;
  height: 60px;
  font-size: 25px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;

  &:hover {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
    border-color: #5cd3a8;
    color: #5cd3a8;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
  width: 100%;
`;

export const SubmitWrap = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
  gap: 80px;
`;
