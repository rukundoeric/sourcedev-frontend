/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

export default function Portifolio({
  logo, imageBackground, imageXL, imageMD,
}) {
  return (
    <div className="card">
      <img src={imageBackground} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex">
          <img src={imageXL} alt="" />
          <img src={imageMD} alt="" />
        </div>
      </div>
    </div>
  );
}
