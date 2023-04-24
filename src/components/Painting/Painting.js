import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg'; // Путь к картинке-заглушке если не пришла с бекенда
// console.log(defaultImage);
//===== Шаблон компонента который получает данные Painting(props) и props-деструктуризируется
export default function Painting({
  imageUrl = defaultImage,
  title,
  author = 'не известен',
  profileUrl,
  price,
  quantity,
}) {
  // const { url, title, author, profileUrl, price } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// pts, ptn, ptsr сокращения для написания PropTypes.string,number,isRequired
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

// =================================  Для стрелочной функции  =============================================//

// const  Painting = ({ url, title, author, profileUrl, price }) => {
//   // const { url, title, author, profileUrl, price } = props;
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }
// export default Painting;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
