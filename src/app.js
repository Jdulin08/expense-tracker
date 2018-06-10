import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const ExpenseDashboardPage = () => (
  <div>
    This is my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is my edit component
  </div>
);

const HelpPage = () => (
  <div>
    This is my help component
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));




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
