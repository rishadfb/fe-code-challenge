import axios from 'axios';
import { apiConfig } from '../config/apiConfig';
import { ContactsResponse } from '../interfaces';

export const getContacts = async () => {
  try {
    const { options } = apiConfig;
    const url = `${getContactsUrl()}`;
    const response = await axios.get<ContactsResponse>(url, options);

    return response.data.contacts.map((c) => c.id);
  } catch (error) {
    console.log('Contacts API error: ', error);
  }
};

export const getContact = async (contactId: string) => {
  try {
    const { options } = apiConfig;
    const url = `${getContactsUrl()}${contactId}`;
    const response = await axios.get<any>(`${url}`, options);

    return response.data;
  } catch (error) {
    console.log('Contact API error: ', error);
  }
};

export const getTags = async (contactId: string) => {
  try {
    const { contactTags, options } = apiConfig;
    const url = `${getContactsUrl()}${contactId}${contactTags}`;
    const response = await axios.get<any>(`${url}`, options);

    return response.data.contactTags;
  } catch (error) {
    console.log('Tags API error: ', error);
  }
};

export const getTag = async (tagId: string) => {
  try {
    const { host, version, tags, options } = apiConfig;
    const url = `${host}${version}${tags}${tagId}`;
    const response = await axios.get<any>(`${url}`, options);

    return response.data.tag;
  } catch (error) {
    console.log('Tag API error: ', error);
  }
};

const getContactsUrl = () => {
  const { host, version, contacts } = apiConfig;
  return `${host}${version}${contacts}`;
};
