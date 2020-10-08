import React from 'react';
import ReactDOM from 'react-dom';
import './css/react-index.css';
import * as serviceWorker from './serviceWorker';

class teste extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <teste name="ao"/>
  </React.StrictMode>,
  document.getElementById('teste')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
