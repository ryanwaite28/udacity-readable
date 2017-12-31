import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Category from './pages/category';
import Details from './pages/details';
import Home from './pages/home';
import ManageCommentsPosts from './pages/manageCommentsPosts';
import { receivedCategories, receivedCategoriesFailure } from './actions/categoriesActions';
import Search from './pages/search';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  
   // const unsubscribe = this.props.store.subscribe(() =>
   //   console.log(store.getState())
    //);
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
        console.log('data: ' + data);
        receivedCategories(data);
      })
      .catch((errors) => receivedCategoriesFailure(errors));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path = '/post/:postId' component={Details}/>
            <Route path='/category' component={Category}/>
            <Route exact path='/search' component={Search}/>
            <Route exact path='/manageCommentsPosts' component={ManageCommentsPosts}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
