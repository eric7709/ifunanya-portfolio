export function formatPrice(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}