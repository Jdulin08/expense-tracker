import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
// console.log('test');
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


// Practice methods
// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };
//
// ReactDOM.render((
//   <Layout>
//     <div>
//       <h1>Page title</h1>
//       <p>This is my page</p>
//     </div>
//   </Layout>
// ), document.getElementById('app'));




// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}.`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());
//
// //
//
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}.`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
