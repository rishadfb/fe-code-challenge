export const getFullName = (contact: any) =>
  `${contact.firstName} ${contact.lastName}`;

export const getLocation = (addressData: Array<any>) => {
  if (addressData.length && addressData.length > 0) {
    const { city, state, country } = addressData[0];
    return `${city}, ${state}, ${country}`;
  } else {
    return '';
  }
};
export const getTagsString = (tagsData: any) =>
  (tagsData ? tagsData : []).toString().split(',').join(', ');

export const getTotalDeals = (dealsData: any) =>
  (dealsData ? dealsData : []).length.toString();

export const getArrayData = (data: Array<any>) => (data ? data : []);
export const getObjectData = (data: any) => (data ? data : {});
