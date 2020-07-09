import React from 'react';
import SIcon from './SIcon';

export default function aboutFact({
  title, desc, icon, iconStyle,
}) {
  return (
    <div className="col-md-12 d-flex align-self-stretch ftco-animate">
      <div className="media block-6 services-wrap d-flex">
        <SIcon styleClass={iconStyle} icon={icon} />
        <div className="media-body pl-4">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
