import axios from "axios";
import { Notify } from "notiflix";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const getToken = async () => {
  try {
    const result = await axios.get(`/token`);
    return await result.data.token;
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (page = 1, count = 6) => {
  try {
    const result = await axios.get(`/users?page=${page}&count=${count}`);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async (formData) => {
  const token = await API.getToken();

  const result = await axios.post("/users", formData, {
    headers: { Token: token },
  });

  result.data.success
    ? Notify.success(result.data.message)
    : Notify.failure(result.data.message);

  return result.data.success;
};

const getPositions = async () => {
  try {
    const result = await axios.get(`/positions`);
    return await result.data.positions;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  getToken,
  getUsers,
  addUser,
  getPositions,
};

export default API;
