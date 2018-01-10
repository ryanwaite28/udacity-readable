// CreateEditModal.js

import React from 'react';

const CreateEditModal = ({ component, createComponent, editComponent }) => {
  
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
    if(component) {
      const title = document.getElementById('titleInput').value;
      const body = document.getElementById('bodyInput').value;
      console.log('title: '+ title);
      console.log('body: '+ body);
      console.log('id: '+ this.getId());
      editComponent(body, this.getId(), title);
    } else {
      createComponent();
    }
  }
  
  return (
    <div data-uk-modal id={"modal_" + this.getId()}>
      <div className="uk-modal-dialog uk-modal-body ">
        <button className="uk-modal-close-default" 
                data-uk-close type="button">
        </button>
        <h2 className="uk-modal-title">{this.getHeader()}</h2>
        <form>
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Author</span>  
            <input className="uk-input" 
                   defaultValue={this.getDefaultValue('author')}
                   id="authorInput" 
                   placeholder="Enter your name here."
                   type="text"/>
          </div>
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Title</span>  
            <input className="uk-input" 
                   defaultValue={this.getDefaultValue('title')}
                   id="titleInput"
                   placeholder="Enter a title here."
                   type="text"/>
          </div>
          <div className="uk-margin">
            <span style={this.styles.sectionTitle}>Content</span>
            <textarea className="uk-textarea" 
                      defaultValue={this.getDefaultValue('body')}
                      id="bodyInput"
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
