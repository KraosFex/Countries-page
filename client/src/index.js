import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


// importamos el store


// importamos los coponentes necesarios
import App from './components/views/App.js';


ReactDOM.render(
    
        <Router>
          <App />
        </Router>,
    document.getElementById('root'));
