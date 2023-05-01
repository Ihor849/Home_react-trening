import React from 'react';

import { InputFilter } from './Filter.styled';

export const Filter = ({ value, handleChange }) => {
  return (
    <InputFilter
      name="filter"
      type="text"
      value={value}
      onChange={handleChange}
    ></InputFilter>
  );
};
