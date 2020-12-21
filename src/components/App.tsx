import React, { useCallback, useEffect, useState } from 'react';
import { getContactsData } from '../services/contactsService';
import { ContactsData } from '../interfaces';
import { Table } from './table/Table';

export const App: React.FC = () => {
  const [contacts, setContacts] = useState<ContactsData[]>();
  const [loading, setLoading] = useState(true);

  async function loadContacts() {
    try {
      const response = await getContactsData();
      setContacts(response);
      setLoading(false);
    } catch (error) {
      console.log('Fetch Data Error: ', error);
    }
  }

  const fetchData = useCallback(loadContacts, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Table contacts={contacts} showLoading={loading} />;
};
