import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './assets/style/global.css'
import Index from './pages/Index/Index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
      </Switch>
    </BrowserRouter>
   </React.StrictMode>,
  document.getElementById('root')
);