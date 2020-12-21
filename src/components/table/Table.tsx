import { ContactsData } from '../../interfaces';
import { TableLoading } from './TableLoading';
import { TableRows } from './TableRows';
import { TableHeader } from './TableHeader';

export const Table: React.FC<Props> = ({ contacts, showLoading }) => (
  <div className="table-container">
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableLoading showLoading={showLoading} />
        <TableRows data={contacts} />
      </tbody>
    </table>
  </div>
);

interface Props {
  contacts: Array<ContactsData> | undefined;
  showLoading: boolean;
}
