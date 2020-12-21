import React from 'react';

export const TableLoading: React.FC<Props> = ({ showLoading }) => (
  <>
    {showLoading ? (
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>Loading data...</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    ) : null}
  </>
);

interface Props {
  showLoading: boolean;
}
