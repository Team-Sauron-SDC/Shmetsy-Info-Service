import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';
import style from './components/main.module.css';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('details'));
