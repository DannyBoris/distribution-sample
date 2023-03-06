export const getYears = (yearsBack: number): number[] => {
  const yearsArray = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > currentYear - yearsBack; i--) {
    yearsArray.push(i);
  }
  return yearsArray;
};

export function notFalsyAllowZero(value: any) {
  return value !== null && value !== undefined && value !== false && value;
}
