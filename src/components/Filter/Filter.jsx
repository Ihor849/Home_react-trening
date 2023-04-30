import React from 'react';

export const Filter = ({ value, handleChange }) => {
  return (
    <input
      name="filter"
      type="text"
      value={value}
      onChange={handleChange}
    ></input>
  );
};
