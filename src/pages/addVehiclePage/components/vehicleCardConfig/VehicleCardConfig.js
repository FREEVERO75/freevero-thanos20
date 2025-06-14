import {
  faArrowLeft,
  faArrowRight,
  faBroom,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons';
import { basicDataFields, technicalData } from '../formConfig/addVehicleFields';
import { BLUE, ORANGE } from '../../../../constants/colors';

export const vehicleCards = [
  {
    icon: faMotorcycle,
    title: 'Βασικά Στοιχεία',
    fields: basicDataFields,
    buttons: ({ clearForm, nextStep }) => [
      {
        label: 'Καθαρισμός',
        iconLeft: faBroom,
        style: { background: ORANGE, borderColor: ORANGE, width: '12rem' },
        onClick: clearForm,
      },
      {
        label: 'Συνέχεια',
        iconRight: faArrowRight,
        style: { background: BLUE, borderColor: BLUE, width: '12rem' },
        onClick: nextStep,
      },
    ],
  },
  {
    icon: faMotorcycle,
    title: 'Τεχνικά Χαρακτηριστικά',
    fields: technicalData,
    buttons: ({ prevStep, nextStep }) => [
      {
        label: 'Πίσω',
        iconLeft: faArrowLeft,
        style: { background: ORANGE, borderColor: ORANGE, width: '12rem' },
        onClick: prevStep,
      },
      {
        label: 'Συνέχεια',
        iconRight: faArrowRight,
        style: { background: BLUE, borderColor: BLUE, width: '12rem' },
        onClick: nextStep,
      },
    ],
  },
];
