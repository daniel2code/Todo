import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TodoItem from './component/Todo';
// import mystyle from './comp'
// import LocalStorage from './component/LocalStorage'
// import Todo from './component/Todo';
// import Like from './component/Like';
// import Parent from './component/Parent'

ReactDOM.render(<TodoItem />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
