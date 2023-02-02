export const getPercent = (min: number, max: number, position: number): number => {
  const result = (100 * (position - min)) / (max - min);
  if (result < 0) return 1;
  if (result > 100) return 99;
  return result;
};
