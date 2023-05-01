import React from 'react';
import './TodoFilter.scss';

const Filter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      className="TodoFilter__input"
      style={{ marginLeft: 15 }}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Filter;
