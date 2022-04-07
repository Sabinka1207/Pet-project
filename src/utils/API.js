import axios from "axios";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

// https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5
const getUsers = async (page = 1, count = 6) => {
  try {
    const result = await axios.get(`/users?page=${page}&count=${count}`);
    return await result.data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = async () => {
  try {
    const result = await axios.post(`/users`, {});
    return await result.data;
  } catch (error) {
    console.log(error);
  }
};

// https://frontend-test-assignment-api.abz.agency/api/v1/positions
const getPositions = async () => {
  try {
    const result = await axios.get(`/positions`);
    return await result.data.positions;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  getUsers,
  addUser,
  getPositions,
};

export default API;
