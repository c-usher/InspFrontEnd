export const unitNumCheck = str => {
    return str.length === 3
};

export const buildingCheck = (str) => {
  return str.length === 1;
};

export const notesCheck = (str) => {
  return str.length >= 1 && str.length <=300;
};