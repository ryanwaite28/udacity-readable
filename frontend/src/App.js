import React from 'react';
import AddComponent from './pages/addComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/category';
import Details from './pages/details';
import Home from './pages/home';
import './styles/App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path = '/add' component={AddComponent}/>
          <Route exact path = '/add/:category' component={() => <AddComponent isDetailPage={true}/>}/>
          <Route exact path = '/:category/:post_id' component={Details}/>
          <Route exact path='/:category' component={Category}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;