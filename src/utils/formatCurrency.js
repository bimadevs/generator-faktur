export const formatCurrency = (amount, minimumFractionDigits = 2) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits }).format(amount);
};
