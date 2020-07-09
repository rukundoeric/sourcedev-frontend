import React from 'react';

export default function SIcon({
  elmId, styleClass, icon,
}) {
  return (
    <div
      id={elmId}
      className={`${styleClass || 'icon'} d-flex justify-content-center align-items-center`}
    >
      <span>
        <i className={icon} />
      </span>
    </div>
  );
}
