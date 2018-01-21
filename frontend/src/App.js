import React from 'react';
import AddComponent from './pages/addComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/category';
import Details from './pages/details';
import Home from './pages/home';
import NotFound from './pages/notFound';
import './styles/App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path ='/add' component={AddComponent}/>
          <Route exact path ='/add/:category' component={AddComponent}/>
          <Route exact path ='/add/:category/:post_id' component={AddComponent}/>
          <Route exact path ='/:category/:post_id' component={Details}/>
          <Route exact path='/:category' component={Category}/>
          <Route exact path='/notFound' component={NotFound}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;