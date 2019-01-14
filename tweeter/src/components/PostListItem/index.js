import React, {Component} from 'react'

import "./PostListItem.css"

class PostListItem extends Component{

  state = {
    important: false,
    like: false
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important : !important
    }))
  }
  onLike = () => {
    this.setState(({like}) => ({
      like : !like
    }))
  }

  render() {

    const {label} = this.props;
    const {important, like} = this.state;
    const [day, month] = new Date().toLocaleDateString("ru",{month:"2-digit", day:"numeric"}).split(' ');

    let classNames="app-list-item d-flex justify-content-between"
    if(important){
      classNames +=" important"
    }
    if(like){
      classNames +=" like"
    }

    return (
      <div className={classNames}>
        <span 
          onClick={this.onLike}
          className="app-list-item-label"
        >
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
        <>
          <span>{day}</span>
          <span>{month}</span>
        </>
          <button 
            type="button"
            className="btn-star btn-sm"
            onClick={this.onImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button 
            type="button"
            className="btn-trash btn-sm"
          >
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    )
  }
}

export default PostListItem
