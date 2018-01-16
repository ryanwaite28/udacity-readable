// addContainer.js

import React from 'react';
import { createPost } from './../api/postsApi';
import { createComment } from './../api/commentsApi';
import { connect } from 'react-redux';

class AddContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      author: '',
      body: '',
      category: '',
      title: ''
    }
          
    this.styles = {
      sectionTitle: {
        display: 'block'
      },
      header: {
        color: '#6575b1', 
        paddingTop: 57
      }
    }
    
    this.header = (this.props.isDetailPage ? 'Create A Comment' : 'Create A Post'); 
  }

  handleAuthorChange = (event) => {
    if(event && event.target) this.setState({ author : event.target.value });
  }

  handleBodyChange = (event) => {
    if(event && event.target) this.setState({ body : event.target.value });
  }

 handleCategoryChange = (event) => {
    if(event && event.target) this.setState({ category : event.target.value });
  }

  handleTitleChange = (event) => {
    if(event && event.target) this.setState({ title : event.target.value });
  }

  handleOnSubmit = () => {
    const { author, body, id, title } = this.state;
    const categoryProp = this.props.categories;
    
    let { category } = this.state;
    if(!category && categoryProp) category = JSON.parse(categoryProp).categories[0].name;
    
    ( this.props.isDetailPage 
      ? createComment(author, body, id, title)
      : createPost(author, body, category, title)
    ); 
    
    this.setState({ author: '', body: '', category: '', title: '' });
  }
  
  render() {
    return (
       <div>
          <form className="uk-position-center" style={{ width: '80%' }}>
            <div className="uk-header">
              <h3 style={this.styles.header}>{this.header}</h3>
            </div>
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Author</span>  
              <input className="uk-input" 
                     placeholder="Enter your name here."
                     onChange={(event) => this.handleAuthorChange(event) }
                     type="text"/>
            </div>
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Title</span>  
              <input className="uk-input" 
                     placeholder="Enter a title here."
                     onChange={(event) => this.handleTitleChange(event) }
                     type="text"/>
            </div>
            { this.props.categories && <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Categories</span>  
              <select className="uk-select" 
                      onChange={(event) => this.handleCategoryChange(event) }>
                { JSON.parse(this.props.categories).categories.map((category, key) => { 
                    return ( 
                      <option key={key}>
                        {category.name}
                      </option> 
                    );
                  })
                }
              </select>
            </div> 
            }
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Content</span>
              <textarea className="uk-textarea" 
                        onChange={(event) => this.handleBodyChange(event) }
                        placeholder="Enter the body here."
                        rows="5" 
                        type="text"/>
            </div>
            <div className="uk-margin uk-footer uk-align-right">
              <a className="uk-button uk-button-default" 
                 href={"/" + this.state.category}>
                Cancel
              </a>
              <a className="uk-button uk-button-default"     
                 href="/"
                 onClick={() => this.handleOnSubmit()}>
                Submit
              </a>
            </div>
          </form>
        </div>
    );
  }
}

function mapStateToProps ({ categoriesReducer }) {
  return { categories : categoriesReducer['categories'] };
}

export default connect(mapStateToProps)(AddContainer);
