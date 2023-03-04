export const getYears = (yearsBack: number): number[] => {
  const yearsArray = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i > currentYear-yearsBack; i--) {
    yearsArray.push(i);
  }
  return yearsArray;
};
