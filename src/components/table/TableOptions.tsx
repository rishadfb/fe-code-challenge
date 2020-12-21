import React from 'react';

export const TableOptions: React.FC<Props> = ({ onClick }) => (
  <div className="table-options-container">
    <div className="table-options-dot" />
    <div className="table-options-dot" />
    <div className="table-options-dot" />
  </div>
);

interface Props {
  onClick?: any;
}
