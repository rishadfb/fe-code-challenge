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

export const CURRENCY_API = 'https://api.exchangerate-api.com/v4/latest/';

export const apiConfig: ApiConfiguration = {
  host: '/api/',
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
