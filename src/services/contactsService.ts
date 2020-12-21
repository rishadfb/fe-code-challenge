import { getContact, getContacts, getTag, getTags } from './apiService';
import {
  getArrayData,
  getFullName,
  getLocation,
  getObjectData,
  getTagsString,
  getTotalDeals,
} from '../helpers/contactsHelper';
import { getTotalValue } from './currencyService';

export const getContactsData = async () => {
  const contactsData = await getContacts();
  const contacts = contactsData ? contactsData.map(getContactData) : [];
  return Promise.all(contacts);
};

export const getContactData = async (contactId: string) => {
  const contactData = await getContact(contactId);

  const { contact, deals, geoAddresses } = parseContactData(contactData);
  const name = getFullName(contact);
  const location = getLocation(geoAddresses);
  const totalDeals = getTotalDeals(deals);
  const tags = await getTagsData(contactId);
  const value = await getTotalValue(deals);

  return {
    id: contactId,
    name,
    tags,
    deals: totalDeals,
    location,
    value,
  };
};

export const getTagsData = async (contactId: string) => {
  const tagsData = await getTags(contactId);
  const tagsList = tagsData.map((t: any) => t.tag);
  const tags = await Promise.all(tagsList.map(getTagData));
  return getTagsString(tags);
};

export const getTagData = async (tagId: string) => {
  const { tag } = await getTag(tagId);
  return tag;
};

export const parseContactData = (data: any) => ({
  contact: getObjectData(data.contact),
  deals: getArrayData(data.deals),
  geoAddresses: getArrayData(data.geoAddresses),
});
