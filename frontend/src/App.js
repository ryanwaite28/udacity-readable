import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/category';
import Details from './pages/details';
import Home from './pages/home';
import ManageCommentsPosts from './pages/manageCommentsPosts';
import './styles/App.css';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path = '/:category/:post_id' component={Details}/>
          <Route path='/:category' component={Category}/>
          <Route exact path='/manageCommentsPosts' component={ManageCommentsPosts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;