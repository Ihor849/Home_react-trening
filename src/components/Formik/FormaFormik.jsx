import React from 'react';
// import { ErrorMessage, Formik, useFormik } from 'formik';
import {Mform, Button ,Container} from './FormaFormik.styled'

export const FormikLib = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Mform>
        <label>
        Email:
          <input
            type="email"
            name='email' />
        </label>
        <p></p>
        <label> 
        Password:
          <input
            type="password"
          name='password' />
        </label>
          <p></p>
        <Button type='submit'>Submit</Button>
      </Mform>
    </Container>
  )
}
    

  

