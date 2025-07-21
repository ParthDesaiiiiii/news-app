import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/3cbd/live/5ee79350-4b7f-11f0-86d5-3b52b53af158.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
