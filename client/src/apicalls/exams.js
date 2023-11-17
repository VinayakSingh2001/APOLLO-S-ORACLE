const { default: axiosInstance } = require(".");

//add exam

export const addExam = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/exams/add", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//get all exams
export const getAllExams = async () => {
    try {
        const response = await axiosInstance.post("/api/exams/get-all-exams");
        return response.data;
      } catch (error) {
        return error.response.data;
      }
}
//get exam by id
export const getExamById = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/exams/get-exam-by-id", payload);
        return response.data;
      } catch (error) {
        return error.response.data;
      }
}

//edit exam by id
export const editExamById = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/exams/edit-exam-by-id", payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  };
};
