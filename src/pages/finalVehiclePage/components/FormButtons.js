import {
  faEdit,
  faFloppyDisk,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { ORANGE, RED } from '../../../constants/colors';

export const FormButtons = ({
  isEdit,
  onEdit,
  onSave,
  openConfirmationModal,
}) =>
  [
    isEdit
      ? {
          label: 'Διαγραφή',
          iconRight: faTrash,
          onClick: openConfirmationModal,
          style: { background: RED, borderColor: RED },
        }
      : null,
    {
      label: 'Επεξεργασία',
      iconRight: faEdit,
      onClick: onEdit,
      style: { background: ORANGE, borderColor: ORANGE },
    },
    {
      label: 'Αποθήκευση',
      iconRight: faFloppyDisk,
      variant: 'success',
      onClick: onSave,
    },
  ].filter(Boolean);
