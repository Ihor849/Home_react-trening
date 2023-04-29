import {GlobalStyle} from '../../style/GlobalStyle'
import './App.css';
// import LoginForm from "./components/formNotControled";
// import FormControlled from "./components/formControled";
// import React from "react";
// import ComplexForm from "./components/complexForm";
// import FormGenerateId from "./components/generateId";
// import CheckboxForm from "./components/Checkboks";
// import Radio from "./components/Radio";
// import Select from "./components/Select";
import {FormikLib} from "components/Formik/FormaFormik";

function App() {
  return (
    <div className="App">
      {/*<LoginForm onSubmit={values => console.log('values: ', values)} />*/}
      {/*<FormControlled />*/}
      {/*<ComplexForm onSubmit={values => console.log(values)} />*/}
      {/*<FormGenerateId/>*/}
      {/*<CheckboxForm />*/}
      {/*<Radio />*/}
      {/*<Select />*/}
      <FormikLib title="Forms in Form" />
     
    </div>
  );
}

export default App;
