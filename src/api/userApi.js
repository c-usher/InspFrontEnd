import axios from "axios";

const loginUrl = "http://localhost:3001/user/login";
export const userLogin = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, formData);
      resolve(res.data);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "InspectApp",
          JSON.stringify({
            refreshJWT: res.data.refreshJWT,
          })
        );
      }
    } catch (error) {
      reject(error);
    }
  });
};
