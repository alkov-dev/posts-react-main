import React, { Component } from 'react';

class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
       text: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onValueChange = this.onValueChange.bind(this)
  }

  onSubmit(evt) {
    evt.preventDefault();
    this.props.onAdd(this.state.text)
    this.setState({
      text: ''
    })
  }

  onValueChange(evt) {
    this.setState({
        text: evt.target.value
    })
  }
  render() {

    return (
      <div className='d-flex align-items-center justify-content-between'>
        <form
        onSubmit={this.onSubmit}
         action=""
         className='w-100 d-flex align-items-center justify-content-between'>
          <input
          onChange={this.onValueChange}
          value={this.state.text}
          type="text"
          className='form-control flex-grow-1 mr-2' />
          <button type='submit' className='btn btn-success'>Добавить</button>
        </form>
      </div>
    )
  }
}





export default NewPost;