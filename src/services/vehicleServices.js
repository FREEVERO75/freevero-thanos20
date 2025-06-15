import { http } from './httpService';

export const addNewVehicleService = body => {
  return http.post('/vehicle/addVehicle', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const editVehicleService = body => {
  return http.put('/vehicle/editVehicle', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getVehicleService = () => {
  return http.get('/vehicle/getVehicle');
};

export const deleteVehicleService = () => {
  return http.delete('/vehicle/deleteVehicle');
};
