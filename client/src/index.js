// import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import dotenv from 'dotenv';

// import components
import App from './components/smartComponents/app/App';

// environment variable
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


ReactDOM.render( <App />, document.getElementById('root'));
