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
