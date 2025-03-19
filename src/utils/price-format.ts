export const formatPrice = (price: number, currency: string): string => {
  switch (currency.toUpperCase()) {
    case 'USD':
      return `US $${price.toFixed(2)}`;
    case 'JPY':
      return `¥${Math.round(price)}`;
    case 'THB':
      return `฿${price.toFixed(2)}`;
    case 'VND':
      return `${Math.round(price)}₫`;
    default:
      return price.toLocaleString();
  }
};
