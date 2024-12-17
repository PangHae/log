import camelcaseKeys from 'camelcase-keys';

export const camelize = (items: any[]) =>
  items.map((items) => camelcaseKeys(items));
