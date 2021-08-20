import axios from "axios";

const rootUrl = "http://localhost:3001";
const loginUrl = `${rootUrl}/user/login`;
const newUserUrl = `${rootUrl}/user/create`;
const logoutUrl = `${rootUrl}/user/logout`;
const userProfUrl = `${rootUrl}/user`;
const newAccessJWT = `${rootUrl}/tokens`;
const refreshJWTUrl = `${rootUrl}/tokens`;
const userVerifyUrl = `${userProfUrl}/verify`;

export const newUser = (formData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(newUserUrl, formData);
      resolve(res.data);

      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const newUserVerify = (frmData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(userVerifyUrl, frmData);

      resolve(res.data);
      if (res.data.status === "success") {
        resolve(res.data);
      }
    } catch (error) {
      reject({ status: "error", message: error.error });
    }
  });
};

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

export const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      const res = await axios.get(userProfUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(res.data);
    } catch (error) {
      console.log(error);
      reject(error.message);
    }
  });
};

export const refreshAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("InspectApp"));
      if (!refreshJWT) {
        reject("Token not found!");
      }
      const res = await axios.get(refreshJWTUrl, {
        headers: {
          Authorization: refreshJWT,
        },
      });
      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
      }
      resolve(res.data);
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("InspectApp");
      }

      reject(false);
    }
  });
};

// export const fetchNewAccessJWT = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const { refreshJWT } = JSON.parse(localStorage.getItem("InspectApp"));
//       if (!refreshJWT) {
//         reject("Token not found!");
//       }
//       const res = await axios.get(newAccessJWT, {
//         headers: {
//           Authorization: refreshJWT,
//         },
//       });
//       if (res.data.status === "success") {
//         sessionStorage.setItem("accessJWT", res.data.accessJWT);
//       }
//       resolve(true);
//     } catch (error) {
//       if (error.message === "Request failed with status code 403") {
//         localStorage.removeItem("InspectApp");
//       }
//       reject(false);
//     }
//   });
// };

export const userLogout = async () => {
  try {
    await axios.delete(logoutUrl, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
  } catch (error) {
    console.log(error);
  }
};
