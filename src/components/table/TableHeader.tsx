import React from 'react';
import { Checkbox } from '../Checkbox';
import { TableOptions } from './TableOptions';

export const TableHeader = () => (
  <tr>
    <th>
      <Checkbox id="th" name="th" value="th" />
    </th>
    <th>Contact</th>
    <th>Total Value</th>
    <th>Location</th>
    <th>Deals</th>
    <th>Tags</th>
    <th>
      <TableOptions />
    </th>
  </tr>
);
