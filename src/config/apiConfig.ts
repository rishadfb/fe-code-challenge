interface ApiConfiguration {
  host: string;
  version: string;
  contacts: string;
  contactTags: string;
  tags: string;
  options: {
    headers: {
      'Api-Token': string | undefined;
    };
  };
}

export const CORS_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://0.0.0.0:8080/'
    : 'https://cors-anywhere.herokuapp.com/';
export const CURRENCY_API = 'https://api.exchangerate-api.com/v4/latest/';

const HOST_URL = `${CORS_URL}https://sahmed93846.api-us1.com/api/`;

export const apiConfig: ApiConfiguration = {
  host: HOST_URL,
  version: '3',
  contacts: '/contacts/',
  contactTags: '/contactTags/',
  tags: '/tags/',
  options: {
    headers: {
      'Api-Token':
        'bcd062dedabcd0f1ac8a568cdcf58660c44d7e79b91763cc1a5d0c03d52c522d851fceb0',
    },
  },
};
