import './App.css';
// import Painting from './components/Painting';

import PaintingList from 'components/Painting/PaintingList';
import Section from 'components/Painting/Section';
//====== Импорт данных делают там где происходит рендер (Арр)
import paintings from 'components/json/paintings.json';


//====== Painting это компонент передает в шаблон данные(props)
// ==== Переделываем рендер коллекции через (map) как положено
// export default function App() {
//   return (
//     <div>
//       <Painting // children для <div>
//         title={paintings[0].title}
//         imageUrl={paintings[0].url}
//         // author={paintings[0].author.tag} если данные не прешли необходимо дефолтное значение в деструкторизации
//         profileUrl={paintings[0].author.url}
//         price={paintings[0].price}
//         quantity={paintings[0].quantity}
//       />

//       <Painting // children для <div>
//         title={paintings[1].title}
//         // imageUrl={paintings[1].url} если данные не прешли используется заглушка
//         author={paintings[1].author.tag}
//         profileUrl={paintings[1].author.url}
//         price={paintings[1].price}
//         quantity={paintings[1].quantity}
//       />

//       <Painting // children для <div>
//         title={paintings[2].title} // children для <Painting><div>
//         imageUrl={paintings[2].url} // children для <Painting><div>
//         author={paintings[2].author.tag} // children для <Painting><div>
//         profileUrl={paintings[2].author.url} // children для <Painting><div>
//         price={paintings[2].price} // children для <Painting><div>
//         quantity={paintings[2].quantity}
//       />
//     </div>
//   );
// }

//=================== Рендер по условию =================//
//=== используется либо логическое (и-&&) или (тернарник-?)
// export default function App() {
//   const isOnline = true; // зарендерится Онлайн
//   // const isOnline = false; //<div> будет пустой (не зарендерится)
//   // Если isOnline = true зарендерится Онлайн или компонент который установлен
//   return (
//     <div>
//       {isOnline && 'Онлайн'}
//       {false} // не рендарится(игнорируетс)
//       {null} // не рендарится(игнорируетс)
//       {undefined} // не рендарится(игнорируетс) // Тернарник//
//       {isOnline ? 'Онлайн' : 'Офлайн'}
//     </div>
//   );
// }

//===================== Рендер коллекции через (map) как положено =========//
// export default function App() {
//   return (
//     <div>
//       {paintings.map(painting => (
//         <Painting
//           key={painting.id}
//           title={painting.title}
//           imageUrl={painting.url}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       ))}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
