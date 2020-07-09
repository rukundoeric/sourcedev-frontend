/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { blog } from '../../data/index.json';
import blogs from '../../data/blogs';
import BlogItem from '../items/Blog';

export default class Blog extends Component {
  render() {
    return (
      <section className="blog_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">{blog.sectionName}</span>
              <h3 className="mb-2 mt-3 mb-3">{blog.title}</h3>
            </div>
          </div>
          <div className="row">
            {
             blogs.map((item, i) => (
               <BlogItem
                 key={`key_${i}`}
                 image={item.image}
                 category={item.category}
                 date={item.date}
                 title={item.title}
                 commentsCount={item.commentsCount}
                 likesCount={item.likesCount}
               />
             ))
           }
          </div>
        </div>
      </section>
    );
  }
}
