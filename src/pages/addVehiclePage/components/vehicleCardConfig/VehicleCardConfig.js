import {
  faArrowLeft,
  faArrowRight,
  faBan,
  faFile,
  faGear,
  faMotorcycle,
} from '@fortawesome/free-solid-svg-icons';
import {
  basicDataFields,
  documents,
  technicalData,
} from '../formConfig/addVehicleFields';
import { BLUE, ORANGE, RED } from '../../../../constants/colors';
import { VEHICLE_DASHBOARD_ROUTE } from '../../../../constants/paths';

export const vehicleCards = [
  {
    icon: faMotorcycle,
    title: 'Βασικά Στοιχεία',
    fields: basicDataFields,
    buttons: ({ navigate, clearForm, nextStep }) => [
      {
        label: 'Ακύρωση',
        iconLeft: faBan,
        style: { background: RED, borderColor: RED, width: '12rem' },
        onClick: () => {
          clearForm();
          navigate(VEHICLE_DASHBOARD_ROUTE);
        },
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
    icon: faGear,
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
  {
    icon: faFile,
    title: 'Έγγραφα & Τοποθεσία',
    fields: documents,
    buttons: ({ prevStep, goToFinalViewPageAndValidateFields }) => [
      {
        label: 'Πίσω',
        iconLeft: faArrowLeft,
        style: { background: ORANGE, borderColor: ORANGE, width: '12rem' },
        onClick: prevStep,
      },
      {
        label: 'Ολοκλήρωση',
        iconRight: faArrowRight,
        style: { background: BLUE, borderColor: BLUE, width: '12rem' },
        onClick: goToFinalViewPageAndValidateFields,
      },
    ],
  },
];
