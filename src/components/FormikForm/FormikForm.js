import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { Input } from './FormikForm.styled';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  font-size: 20px;
  color: green;
`;

// const Form = styled(Form)`
//   width: 600px;
//   margin: 0 auto;
//   display: flex;
//   gap: 15px;
//   justify-items: center;
//   align-items: center;
//   justify-content: center;
//   padding: 25px;
// `;

export const FormikForm = () => {
  const hadleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hadleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="login">
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
