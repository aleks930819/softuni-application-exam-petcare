export const checkForEmptyField = (strings) => {
  return strings.some((string) => string.trim() === '');
};
