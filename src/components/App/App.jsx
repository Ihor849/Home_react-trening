import { Alert } from 'components/Alert/Alert';
import { Product } from 'components/Product/Product';

const productCard = {
  name: 'TacosWithLime',
  price: '10.99',
  imgUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
};

export const App = () => {
  return (
    <>
      <Alert variant="info">Would you like to browse our recommended products?</Alert>
      <Alert variant="error">There was an error during your last transaction</Alert>
      <Alert variant="success">Payment received, thank you for your purchase</Alert>
      <Alert variant="warning">Please update your profile contact information</Alert>
      <h1>Best selling products</h1>
      <Product productCard={productCard} />
    </>
  );
};