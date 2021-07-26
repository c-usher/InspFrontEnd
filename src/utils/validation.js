export const unitNumCheck = (str) => {
  return str.length === 4;
};

export const notesCheck = (str) => {
  return str.length >= 1 && str.length <= 300;
};
