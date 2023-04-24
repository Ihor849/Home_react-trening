import React, {Component} from 'react'
import Container from 'components/Container/Container'
import Form1 from 'components/Form/Form1'
import Form2 from 'components/Form/Form2'


class App extends Component {
  formSubmitHandler = State_data => {
    console.log(State_data);
  }
  render() {
    return (
    <>
      <h1 className='title'>Состояние компонента ФОРМ</h1>
      <Container/>
        <Form1 onSubmit={this.formSubmitHandler} />
        <Form2/>
      
    </>)
  }

};
export default App;