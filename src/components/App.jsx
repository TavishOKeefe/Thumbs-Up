import React from 'react';
import Header from './Header';
import Main from './Main';


import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App() {


  return (
    <div>
      <Header/>
      <Switch>
        <Route patht='/' component={Main}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );

}


export default App;
