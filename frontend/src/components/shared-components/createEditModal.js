// CreateEditModal.js

import React from 'react';

const CreateEditModal = ({ categories, component, createComponent, editComponent }) => {
  
  this.styles = {
    sectionTitle: {
      display: 'block'
    }
  }
  
  this.getDefaultValue = (elementToCheck) => {
    if(component) return component[''+ elementToCheck];
  }
  
  this.getHeader = () => {
    let header = 'Create A Post';
    if(component) header = 'Edit A Post';
    return header;
  }
  
  this.getId = () => {
    let id = '';
    if(component) id = component.id;
    return id;
  }
  
  this.handleOnSubmit = () => {
    const id = this.getId();
    const author = document.getElementById("authorInput_" + id).value;
    const body = document.getElementById("bodyInput_" + id).value;
    const title = document.getElementById("titleInput_" + id).value;
    
    if(component) {
      editComponent(body, this.getId(), title);
    } else {
      const category = document.getElementById("categoriesInput_" + id).value;
      createComponent(author, body, category, title);
    }
  }
  
  return (
    <div data-uk-modal id={"modal_" + this.getId()}>
      <div className="uk-modal-dialog uk-modal-body ">
        <button className="uk-modal-close-default" 
                data-uk-close type="button">
        </button>
        <h2 className="uk-modal-title">{this.getHeader()}</h2>
        <form id="form">
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Author</span>  
            <input className="uk-input" 
                   value={this.getDefaultValue('author')}
                   id={"authorInput_" + this.getId()}
                   placeholder="Enter your name here."
                   type="text"/>
          </div>
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Title</span>  
            <input className="uk-input" 
                   value={this.getDefaultValue('title')}
                   id={"titleInput_" +this.getId()}
                   placeholder="Enter a title here."
                   type="text"/>
          </div>
          { categories && <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Categories</span>  
            <select className="uk-select" 
                    id={"categoriesInput_" + this.getId()}
            >
              { JSON.parse(categories).categories.map((category, key) => { 
                  console.log(category.name);
                  return ( <option key={key}>{category.name}</option> );
              })}
            </select>
          </div> 
          }
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Content</span>
            <textarea className="uk-textarea" 
                      value={this.getDefaultValue('body')}
                      id={"bodyInput_" + this.getId()}
                      rows="5"
                      placeholder="Enter the body here."
                      type="text" />
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

export default CreateEditModal;
