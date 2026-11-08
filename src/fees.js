const BASE_RATE_BY_ZONE = Object.freeze({ FR: 4, EU: 8 });

export function calculateShippingFee(weightKg, zone) {
  const baseRate = BASE_RATE_BY_ZONE[zone];
  const weightSupplement = Math.max(0, Math.ceil(weightKg) - 2) * 2;
  return baseRate + weightSupplement;
}
