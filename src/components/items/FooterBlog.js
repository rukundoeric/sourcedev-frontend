/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function FooterBlog({
  image,
  date,
  title,
}) {
  return (
    <div className="block-21 mb-4 d-flex">
      <img
        className="img mr-4 rounded"
        src={image}
      />
      <div className="text">
        <h3 className="heading">
          <a href="#">
            {title}
          </a>
        </h3>
        <div className="meta">
          <div>
            <a href="#">
              <span className="icon-calendar" />
              {date}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
