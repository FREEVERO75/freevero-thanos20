import { faEdit, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { ORANGE } from '../../../constants/colors';

export const FormButtons = ({ onEdit, onCancel }) => [
  {
    label: 'Επεξεργασία',
    iconLeft: faEdit,
    onClick: onEdit,
    style: { background: ORANGE, borderColor: ORANGE },
  },
  {
    label: 'Αποθήκευση',
    iconRight: faFloppyDisk,
    variant: 'success',
  },
];
