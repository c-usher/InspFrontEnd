import axios from "axios";

const rootUrl = "http://localhost:3001";
const resetPassUrl = `${rootUrl}/user/reset-password`;

export const passResetRequest = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(resetPassUrl, { email });

      resolve(data);
    } catch (error) {
      reject({ status: error, message: error.message });
    }
  });
};
