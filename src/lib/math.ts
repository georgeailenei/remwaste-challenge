
export const calculateTotalPrice = (price_before_vat: number, vat: number, hire_period_days: number): number => {
  const totalPrice = Math.ceil(price_before_vat * (1 + vat / 100) * (7 / hire_period_days));
  return totalPrice;
};
