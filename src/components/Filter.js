import React from 'react';

const Filter = ({ value, onChange }) => (
  <label className="label__filter">
    Фильтр по имени
    <input
      className="input__filter"
      style={{ marginLeft: 15 }}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

export default Filter;
