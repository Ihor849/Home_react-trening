// import { Global } from '@emotion/react';
import { Component } from 'react'
// import { GlobalStyle } from './GlobalStyle'
// import { LoginForm } from 'components/LoginForm/LoginForm'
import {FormikForm} from 'components/FormikForm/FormikForm'

class App extends Component {
  render() {
    return (
    <div>
        
        {/* <LoginForm /> */}
        <FormikForm/>
        
    </div>
  );
  }
  
};
export default App