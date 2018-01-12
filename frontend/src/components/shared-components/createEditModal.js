// CreateEditModal.js

import React from 'react';

class CreateEditModal extends React.Component {
  constructor(props) {
    super(props);
          
    this.styles = {
      sectionTitle: {
      display: 'block'
      }
    }
    
    this.componentPassed = props.component;  
          
    this.header = 'Create A Post';
    if(this.componentPassed) this.header = 'Edit A Post';
    
    this.id = '';
    if(this.componentPassed) this.id = this.componentPassed.id;
  }
  
  getDefaultValue = (elementToCheck) => {
    if(this.componentPassed) return this.componentPassed[''+ elementToCheck];
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
    const author = document.getElementById("authorInput_" + this.id).value;
    const body = document.getElementById("bodyInput_" + this.id).value;
    const title = document.getElementById("titleInput_" + this.id).value;
    
    if(this.componentPassed) {
      this.props.editComponent(body, this.id, title);
    } else {
      const category = document.getElementById("categoriesInput_" + this.id).value;
      this.props.createComponent(author, body, category, title);
    }
  }
  
  render() {
    return (
      <div data-uk-modal id={"modal_" + this.id}>
        <div className="uk-modal-dialog uk-modal-body ">
          <button className="uk-modal-close-default" 
                  data-uk-close type="button">
          </button>
          <h2 className="uk-modal-title">{this.header}</h2>
          <form id="form">
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Author</span>  
              <input className="uk-input" 
                     id={"authorInput_" + this.id}
                     placeholder="Enter your name here."
                     type="text"
                     defaultValue={this.getDefaultValue('author')}/>
            </div>
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Title</span>  
              <input className="uk-input" 
                     id={"titleInput_" +this.id}
                     placeholder="Enter a title here."
                     type="text"
                     defaultValue={this.getDefaultValue('title')}/>
            </div>
            { this.props.categories && <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Categories</span>  
              <select className="uk-select" 
                      id={"categoriesInput_" + this.id}
              >
                { JSON.parse(this.props.categories).categories.map((category, key) => { 
                    return ( <option key={key}>{category.name}</option> );
                })}
              </select>
            </div> 
            }
            <div className="uk-margin">
              <span style={this.styles.sectionTitle}>Content</span>
              <textarea className="uk-textarea" 
                        id={"bodyInput_" + this.id}
                        placeholder="Enter the body here."
                        rows="5" 
                        type="text" 
                        defaultValue={this.getDefaultValue('body')}/>
            </div>
            <div className="uk-margin uk-footer uk-align-right">
              <button className="uk-button uk-button-default uk-modal-close" 
                      type="button">
                Cancel
              </button>
              <button className="uk-button uk-button-default uk-modal-close" 
                      onClick={() => this.handleOnSubmit()}
                      type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEditModal;
