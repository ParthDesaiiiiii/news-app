import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
        <img src={!imageUrl?"https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2025/04/Pixel-9-Pro-XL-with-collection.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
