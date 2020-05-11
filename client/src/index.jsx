import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('details'));
