import { http } from './httpService';

export const registerService = body => {
  return http.post('/user/register', body);
};

export const loginService = body => {
  return http.post('/user/login', body);
};

export const getUserDataService = () => {
  return http.get('/user/getUserData');
};

export const getAllUserService = () => {
  return http.get('/user/getAllUsers');
};

export const updateUserDataService = body => {
  return http.put('/user/updateUserData', body);
};

export const deleteUserService = id => {
  return http.delete(`/user/deleteUser/${id}`);
};
