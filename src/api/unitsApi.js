import axios from "axios";

export const getAllUnits = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:3001/units", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMDExQHRlc3QuY29tIiwiaWF0IjoxNjI1Nzk1NDM0LCJleHAiOjE2MjU3OTYzMzR9.PFH0oHDunDiPHEBpJ4SXZdgC5G3aFQna5yISEDB8Pw0",
        },
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
