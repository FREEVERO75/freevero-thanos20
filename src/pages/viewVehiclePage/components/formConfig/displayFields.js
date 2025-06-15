import {
  fuelTypeOptions,
  motorcycleTypeOptions,
  transmissionOptions,
} from '../../../../constants/selectOptions';

export const displayFields = [
  { label: 'Πινακίδα κυκλοφορίας', name: 'vehiclePlate' },
  { label: 'Έτος κυκλοφορίας', name: 'vehicleYear' },
  { label: 'Μάρκα οχήματος', name: 'vehicleBrand' },
  { label: 'Μοντέλο οχήματος', name: 'vehicleModel' },
  { label: 'Χιλιόμετρα', name: 'vehicleKm' },
  { label: 'Κυβικά', name: 'vehicleCc' },
  { label: 'Ίπποι', name: 'vehicleHp' },
  {
    label: 'Τύπος Καυσίμου',
    name: 'vehicleFuelType',
    options: fuelTypeOptions,
  },
  {
    label: 'Τύπος μηχανής',
    name: 'motorcycleType',
    options: motorcycleTypeOptions,
  },
  {
    label: 'Σασμάν',
    name: 'vehicleTransmission',
    options: transmissionOptions,
  },
  { label: 'Διεύθυνση', name: 'vehicleAddress' },
  { label: 'Φωτογραφίες', name: 'vehiclePhotos', sm: 12 },
  { label: 'Άδεια κυκλοφορίας', name: 'vehicleLicence', sm: 12 },
];
