import React, { Component } from 'react'

export class Newsitem extends Component {
    // constructor(){
    //     super();
    //     console.log("hello I am a constructor");
    // }

  render() {
    let {title,description,imgUrl,newsUrl,author,date,source}= this.props;
    return (
      <div>
        <div className="card my-3">
            <div className="card-body">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
                  {source}
                  <span class="visually-hidden">unread messages</span>
                </span>
                <img src={imgUrl} className="card-img-top" alt="..."></img>
                <h5 className="card-title">{title}<span className='badge bg-secondary my-3'>NEW</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()} </small></p>
                <a href={newsUrl} target="#" className="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem