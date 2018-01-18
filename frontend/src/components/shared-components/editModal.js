// EditModal.js

import React from 'react';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
          
    this.state = {
      body: '',
      id: '',
      title: ''
    }
    
    this.styles = {
      sectionTitle: {
      display: 'block'
      }
    }
    
    this.header = 'Edit A Post';
  }
  
  componentWillMount = () => {
    const { body, id, title } = this.props;
    this.setState({ body: body, id: id, title: title });
  }

  handleBodyChange = (event) => {
    if(event && event.target) this.setState({ body : event.target.value });
  }

  handleTitleChange = (event) => {
    if(event && event.target) this.setState({ title : event.target.value });
  }

  handleOnSubmit = () => {
    const { body, id, title } = this.state;
    this.props.editComponent(body, id, title);
  }
  
  render() {
    const { body, id, title } = this.state;

    return (
      <div data-uk-modal id={'modal_' + id}>
        <div className='uk-modal-dialog uk-modal-body'>
          <button className='uk-modal-close-default' 
                  data-uk-close type='button'>
          </button>
          <h2 className='uk-modal-title'>{this.header}</h2>
          <form id='form'>
            <div className='uk-margin'>
              <span style={this.styles.sectionTitle}>Title</span>  
              <input className="uk-input" 
                     id={'titleInput_' + id}
                     onChange={(event) => this.handleTitleChange(event)}
                     type='text'
                     value={title}/>
            </div>
            <div className='uk-margin'>
              <span style={this.styles.sectionTitle}>Content</span>
              <textarea className='uk-textarea'
                        id={'bodyInput_' + id}
                        onChange={(event) => this.handleBodyChange(event)}
                        rows='5'
                        type='text'
                        value={body}/>
            </div>
            <div className='uk-margin uk-footer uk-align-right'>
              <button className='uk-button uk-button-default uk-modal-close'
                      type='button'>
                Cancel
              </button>
              <button className='uk-button uk-button-default uk-modal-close'
                      onClick={() => this.handleOnSubmit()}
                      type='button'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditModal;
