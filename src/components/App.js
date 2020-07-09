/* eslint-disable */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Test from './layouts/Test';
import '../plugins';
import '../assets/css/style.css';
import 'aos/dist/aos.css';
// import '../plugins/fontawesome/css/all.css';


// import '../assets/scss/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
