import React from 'react';
// import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

export const TableRows: React.FC<Props> = ({ data }) => (
  <>
    {data?.map((data: any) => (
      <tr key={data.id}>
        <td>
          <Checkbox id={data.id} name={data.id} value={data.id} />
        </td>
        <td className="data-name">{data.name}</td>
        <td>{data.value}</td>
        <td>{data.location}</td>
        <td>{data.deals}</td>
        <td>{data.tags}</td>
        <td>{/* <Button label="Email" /> */}</td>
      </tr>
    ))}
  </>
);

interface Props {
  data: any;
}
