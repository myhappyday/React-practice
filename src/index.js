import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../src/components/App';
// import App from './App';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// *******************************************************************
// ============================================
// const Element = React.createElement('div', { a: 5, b: 10 }, 'Hello, World!');

// console.log(Element);

// const root = document.getElementById('root');
// const p = React.createElement('p', { id: 'text', children: 'Text content' });
// const div = React.createElement('div', {
//   id: '123',
//   className: 'qwerty',
//   children: ['Hello', 'From React', p],
// });
// ReactDOM.createRoot(root).render(div);
// console.log(div);

// ***************************************

// const elem1 = React.createElement('span', { children: ['Hello'] });

// const elem2 = React.createElement('span', { children: ['world'] });

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello world',
// });
// console.log(element);

// ReactDOM.createRoot(document.getElementById('root')).render(element);

// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;
// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(element);

// *********************************************

// const data = paintings[0];

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// console.log(painting);
// ReactDOM.createRoot(document.getElementById('root')).render(painting);

//-----------

// const painting = paintings[1];
//  <Painting
//    url={painting.url}
//    title={painting.title}
//    author={painting.author.tag}
//    profileUrl={painting.author.url}
//    price={painting.price}
//  />;

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ===================================================================
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
