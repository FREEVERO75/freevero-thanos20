import { INPUT_TYPE, SELECT_TYPE } from '../../../../constants/types';
import { fuelTypeOptions, motorcycleTypeOptions } from './addVehicleOptions';

export const basicDataFields = [
  {
    label: 'Πινακίδα κυκλοφορίας',
    name: 'vehiclePlate',
    required: true,
    placeholder: 'Συμπληρώστε την πινακίδα',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Έτος κυκλοφορίας',
    name: 'vehicleYear',
    required: true,
    placeholder: 'Συμπληρώστε το έτος κυκλοφορίας',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Τύπος μηχανής',
    name: 'motorcycleType',
    required: true,
    type: SELECT_TYPE,
    options: motorcycleTypeOptions,
    sm: 4,
  },
  {
    label: 'Μάρκα οχήματος',
    name: 'vehicleBrand',
    required: true,
    placeholder: 'Συμπληρώστε το μοντέλο οχήματος',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Μοντέλο οχήματος',
    name: 'vehicleModel',
    required: true,
    placeholder: 'Συμπληρώστε το μοντέλο οχήματος',
    type: INPUT_TYPE,
    sm: 4,
  },
];

export const technicalData = [
  {
    label: 'Χιλιόμετρα',
    required: true,
    placeholder: 'Συμπληρώστε τα χιλιόμετρα',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Κυβικά',
    required: true,
    placeholder: 'Συμπληρώστε τα κυβικά',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Ίπποι',
    required: true,
    placeholder: 'Συμπληρώστε τους ίππους',
    type: INPUT_TYPE,
    sm: 4,
  },
  {
    label: 'Τύπος Καυσίμου',
    required: true,
    type: SELECT_TYPE,
    options: fuelTypeOptions,
    sm: 4,
  },
];
