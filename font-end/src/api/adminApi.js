import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUsers = (token) => {
  try {
      const res = axios({
      method: 'get',
      url: baseUrl + '/user',
      headers: {
        'token': token,
      }
    });
    return res;
  } catch (error) {
    throw error;
  }
}

export const changeStatusUser = (id) => {
  try {
      const res = axios({
      method: 'put',
      url: baseUrl + '/user/' + id + '/changeStatus',
    });
    return res;
  } catch (error) {
    throw error;
  }
}

export const deleteUser = (id) => {
  try {
      const res = axios({
      method: 'delete',
      url: baseUrl + '/user/' + id,
    });
    return res;
  } catch (error) {
    throw error;
  }
}