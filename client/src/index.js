import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import AuthContext from './Context/AuthContext'
import App from './App';
import './css/main.css'

ReactDOM.render(
   <AuthContext>
      <Router>
         <App />
      </Router>
   </AuthContext>
   , document.getElementById('root')
);