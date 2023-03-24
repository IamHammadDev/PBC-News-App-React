import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/03_mar/23_thu/img_1679588088930_23.jpg?"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-warning"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
