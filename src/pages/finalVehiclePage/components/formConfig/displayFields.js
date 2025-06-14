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
    options: [
      { label: 'Βενζίνη', value: 0 },
      { label: 'Ηλεκτρικό', value: 1 },
    ],
  },
  {
    label: 'Τύπος μηχανής',
    name: 'motorcycleType',
    options: [
      { label: 'Scooter', value: 0 },
      { label: 'Moped', value: 1 },
      { label: 'Cruiser', value: 2 },
      { label: 'Sportbike', value: 3 },
      { label: 'Touring', value: 4 },
      { label: 'Off road/Dirt bike', value: 5 },
      { label: 'Adenture', value: 6 },
    ],
  },
  {
    label: 'Σασμάν',
    name: 'vehicleTransmission',
    options: [
      { label: 'Χειροκίνητο', value: 0 },
      { label: 'Αυτόματο', value: 1 },
    ],
  },
  { label: 'Διεύθυνση', name: 'vehicleAddress' },
  { label: 'Φωτογραφίες', name: 'vehiclePhotos', sm: 12 },
  { label: 'Άδεια κυκλοφορίας', name: 'vehicleLicence', sm: 12 },
];
