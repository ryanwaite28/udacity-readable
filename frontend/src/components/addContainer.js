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
      category_selected: '',
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
    
    this.header = (props.id ? 'Create A Comment' : 'Create A Post'); 
  }

  handleAuthorChange = (event) => {
    if(event && event.target) this.setState({ author : event.target.value });
  }

  handleBodyChange = (event) => {
    if(event && event.target) this.setState({ body : event.target.value });
  }

 handleCategoryChange = (event) => {
    if(event && event.target) this.setState({ category_selected : event.target.value });
  }

  handleTitleChange = (event) => {
    if(event && event.target) this.setState({ title : event.target.value });
  }

  handleOnSubmit = () => {
    const { author, body, category_selected, title } = this.state;
    const { category, categories } = this.props;
    const availableCategories = categories;
    
    let categoryToSet = category_selected;
    if (!categoryToSet) categoryToSet = category;
    if (!categoryToSet && availableCategories) 
      categoryToSet = JSON.parse(availableCategories).categories[0].name;
    
    ( this.props.id 
      ? createComment(author, body, this.props.id, title)
      : createPost(author, body, categoryToSet, title)
    );
  }
  
  render() {
    let { category, categories, id } = this.props;
    let originUrl = '/';
    if(category) originUrl = originUrl + category;
    if(category && id) originUrl = originUrl + '/';
    if(id) originUrl = originUrl + id;

    return (
       <div>
          <form className='uk-position-center' style={{ width: '80%' }}>
            <div className='uk-header'>
              <h3 style={this.styles.header}>{this.header}</h3>
            </div>
            <div className='uk-margin'>
              <span style={this.styles.sectionTitle}>Author</span>  
              <input className='uk-input' 
                     placeholder='Enter your name here.'
                     onChange={(event) => this.handleAuthorChange(event) }
                     type='text'/>
            </div>
            <div className='uk-margin'>
              <span style={this.styles.sectionTitle}>Title</span>  
              <input className='uk-input' 
                     placeholder='Enter a title here.'
                     onChange={(event) => this.handleTitleChange(event) }
                     type='text'/>
            </div>
            { !id && !this.props.category &&
              <div className='uk-margin'>
                <span style={this.styles.sectionTitle}>Categories</span>  
                <select className='uk-select' 
                        onChange={(event) => this.handleCategoryChange(event) }>
                  { categories && JSON.parse(categories).categories.map((category, key) => { 
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
            <div className='uk-margin'>
              <span style={this.styles.sectionTitle}>Content</span>
              <textarea className='uk-textarea'
                        onChange={(event) => this.handleBodyChange(event) }
                        placeholder='Enter the body here.'
                        rows='5'
                        type='text'/>
            </div>
            <div className='uk-margin uk-footer uk-align-right'>
              <a className='uk-button uk-button-default' 
                    href={originUrl}>
                Cancel
              </a>
              <a className='uk-button uk-button-default'     
                    href={originUrl}
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
