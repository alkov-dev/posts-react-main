import React, {Component} from 'react';
import './Post.css';

class Post extends Component {

  render () {
    const {text , onDelete, onToggleImportant, onToggleLiked, like, important} = this.props;
    let classNames = 'p-0 fa fa-star'
    let classNamesLike = 'fa fa-heart';
    let classNamesDanger = 'm-0 flex-grow-1 font-w-bold'
    if (important) {
      classNames += '-o'
    }
    if (like) {
      classNamesLike += '-o'
      classNamesDanger += ' text-danger'
    }
    return (
      <li  className="bg-white p-3 my-2 d-flex align-items-center">
        <p className={classNamesDanger} >{text}</p>
        <button onClick={onToggleImportant} className='btn z-index'><i className={classNames} aria-hidden="true"></i></button>
        <button onClick={onDelete} className='z-index mx-2 btn btn-danger'><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        <button onClick={onToggleLiked} className='btn'><i className={classNamesLike}></i></button>
      </li>
    )
  }

}
export default Post;