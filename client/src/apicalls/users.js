const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
