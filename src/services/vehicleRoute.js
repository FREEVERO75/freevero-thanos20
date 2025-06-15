import { http } from './httpService';

export const addNewVehicleService = body => {
  return http.post('/vehicle/addVehicle', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
