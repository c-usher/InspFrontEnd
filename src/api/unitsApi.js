import axios from "axios";

const rootUrl = "http://localhost:3001";
const getAllUnitsUrl = `${rootUrl}/units`;
const getUnitNoteUrl = `${rootUrl}/units/unit/note/`;
const getUnitUrl = `${rootUrl}/units/unit/`;
const updateNoteStatusUrl = `${rootUrl}/units/unit/note-status/`;

export const getAllUnits = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(getAllUnitsUrl, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUnit = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(getUnitUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const createNote = (_id, noteObj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.put(getUnitNoteUrl + _id, noteObj, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const updateNoteStatus = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        updateNoteStatusUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const addNewUnit = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(getAllUnitsUrl, formData, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
