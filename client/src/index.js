// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import dotenv from 'dotenv';

// Environment variable
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

// import components
import App from './components/smartComponents/app/App';


ReactDOM.render( <App />, document.getElementById('root'));
