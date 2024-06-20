export function currencyString(value: number | string) {
  let input = typeof value === "number" ? value : Number(value);
  return new Intl.NumberFormat("en-UK", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(input);
}
