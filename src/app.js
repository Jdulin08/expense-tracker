console.log('App.js is running!');
//Use const to assign and let to reassign, no more var
const app = {
  title: 'Indecision App',
  subtitle: 'Put your hands in the life of a computer',
  options: ['One', 'Two']
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li> Item one </li>
      <li> Item two </li>
    </ol>
  </div>
);

const user = {
  name: 'Jason',
  age: 26,
  location: 'Chicago'
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
