/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function card(props) {
  console.log(props);
  return <div className={`${props.className} d-flex`}>{props.children}</div>;
}
