
export const calculateTotalPrice = (price_before_vat: number, vat: number, hire_period_days: number): number => {
  const totalPrice = Math.ceil(price_before_vat * (1 + vat / 100) * (7 / hire_period_days));
  return totalPrice;
};

export const calculateSkipCost = (size: number, pricePerTonne: number): number => {
  const baseWeight = 10;
  const estimatedWeight = (size / 40) * baseWeight;
  const totalCost = estimatedWeight * pricePerTonne;
  return totalCost;
}

export const calculatePrice = (id: number, size: number, priceBeforeVat: number | null, perTonneCost: number | null): number => {
  const basePrice = 500;
  let price = basePrice;

  if (id) {
    if (priceBeforeVat !== null) {
      price = priceBeforeVat;
    } else if (perTonneCost !== null) {
      price = calculateSkipCost(size, perTonneCost); 
    }
  }

  return price;
};