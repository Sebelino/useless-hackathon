export const formatAmount = new Intl.NumberFormat('sv-SE', {
  style: 'currency',
  currency: 'USD',
}).format;
