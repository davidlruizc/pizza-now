import moment from 'moment';

type TDate = string | Date;

export const hookFormValidation = {
  mode: 'all',
  reValidateMode: 'onBlur',
  criteriaMode: 'all',
} as any;

export const FormatCurrency = (value: number) => {
  const options = { style: 'currency', currency: 'COP', minimumFractionDigits: 0 };
  const currency = new Intl.NumberFormat('es-CO', options);

  return currency.format(value);
};

export const RandomPizzaImage = (): string => {
  const PizzaList = [
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=462&q=80',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
    'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80',
    'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80',
    'https://images.unsplash.com/photo-1585505008861-a5c378857dcc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  ];

  const randomItem = PizzaList[Math.floor(Math.random() * PizzaList.length)];

  return randomItem;
};

export const formatHumanizeDate = (date: TDate): string => {
  const r1 = +moment(date);
  const r2 = +moment();
  const result = r1 - r2;
  const local = 'es';
  return moment.duration(result).locale(local).humanize();
};
