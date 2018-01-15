// AddComponent.js

import React from 'react';

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
          
    this.styles = {
      sectionTitle: {
      display: 'block'
      }
    }
    
    this.category = '';
    this.header = 'Create A Post';
    this.id = '';
  }
  
  handleOnClick = (event) => {
    if(event && event.target && event.target.defaultValue) {
      event.target.value = event.target.defaultValue;
    }
  }

  handleOnChange = (event) => {
    if(event && event.target) {
      console.log(event.target.value);
    }
  }

  handleOnSubmit = () => {
    let authorElement = document.getElementById("authorInput");
    const author = authorElement.value;
    
    let bodyElement = document.getElementById("bodyInput");
    const body = bodyElement.value;
    
    let titleElement =  document.getElementById("titleInput");
    const title = titleElement.value;
    
    this.category = document.getElementById("categoriesInput").value;
    this.props.createComponent(author, body, this.category, title);
    authorElement.value = '';
    bodyElement.value = '';
    titleElement.value = '';
  }
  
  render() {
    return (
       <div>
          <form className="uk-position-center" id="form" style={{ width: '80%' }}>
            <div className="uk-header">
              <h2>{this.header}</h2>
            </div>
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Author</span>  
              <input className="uk-input" 
                     id="authorInput"
                     placeholder="Enter your name here."
                     type="text"/>
            </div>
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Title</span>  
              <input className="uk-input" 
                     id="titleInput"
                     placeholder="Enter a title here."
                     type="text"/>
            </div>
            { this.props.categories && <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Categories</span>  
              <select className="uk-select" 
                      id="categoriesInput">
                { JSON.parse(this.props.categories).categories.map((category, key) => { 
                    return ( <option key={key}>{category.name}</option> );
                })}
              </select>
            </div> 
            }
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Content</span>
              <textarea className="uk-textarea" 
                        id="bodyInput"
                        placeholder="Enter the body here."
                        rows="5" 
                        type="text"/>
            </div>
            <div className="uk-margin uk-footer uk-align-right">
              <a className="uk-button uk-button-default" 
                 href={`/${this.category}`}>
                Cancel
              </a>
              <button className="uk-button uk-button-default" 
                      onClick={() => this.handleOnSubmit()}
                      href="/">
                Submit
              </button>
            </div>
          </form>
        </div>
    );
  }
}

export default AddComponent;
