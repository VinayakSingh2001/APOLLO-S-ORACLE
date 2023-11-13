const { default: axiosInstance } = require(".");

export const signupUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/api/users/get-user-info");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
