import React from 'react';

export const Checkbox: React.FC<Props> = ({ id, name, value }) => (
  <label className="checkbox-container">
    <input type="checkbox" id={id} name={name} value={value} />
    <span className="checkmark"></span>
  </label>
);

interface Props {
  id: string;
  name: string;
  value: string;
}
