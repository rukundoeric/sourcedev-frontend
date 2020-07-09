import React from 'react';

export default function select({ items, selectStyle }) {
  return (
    <div className={`${selectStyle || 'select-1'} mt-10`}>
      <div className="form-select" id="default-select">
        <select>
          {items.map(item => (
            <option key={`key_${item}`} value=" 1">
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
