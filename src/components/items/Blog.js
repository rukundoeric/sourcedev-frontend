import React from 'react';

export default function Blog({
  image, category, date, title, commentsCount, likesCount,
}) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-4">
      <div className="single-home-blog">
        <div className="card">
          <img src={image} className="card-img-top" alt="blog" />
          <div className="card-body">
            <a href="blog.html">{category}</a>
            |
            <span>{date}</span>
            <a href="blog.html">
              <h5 className="card-title">
                {title}
              </h5>
            </a>
            <ul>
              <li>
                <span className="ti-comments" />
                {`${commentsCount} Comments`}
              </li>
              <li>
                <span className="ti-heart" />
                {`${likesCount} Like`}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
