import axios from "axios";

const rootUrl = "http://localhost:3001";
const getAllUnitsUrl = `${rootUrl}/units`;
const getUnitUrl = `${rootUrl}/units/unit/`;
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
