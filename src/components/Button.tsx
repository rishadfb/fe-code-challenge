import React from 'react';

export const Button: React.FC<Props> = ({ onClick, label }) => (
  <button className="btn" onClick={onClick}>
    <div className="btn-text">{label}</div>
    <div className="btn-icon">
      <span>▼</span>
    </div>
  </button>
);

interface Props {
  onClick?: any;
  label: string;
}
