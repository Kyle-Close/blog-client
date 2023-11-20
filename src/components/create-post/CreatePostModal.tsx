import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { useTheme } from '@mui/material/styles';

interface CreatePostModalProps {
  open: boolean;
  handleClose: () => void;
  msg: string;
  btnText: string;
  btnLink: string;
  isSuccess: boolean;
}

function CreatePostModal({
  open,
  handleClose,
  msg,
  btnText,
  btnLink,
  isSuccess,
}: CreatePostModalProps) {
  const theme = useTheme();

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    bgcolor: '#282828',
    color: '#e6e3e3',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    pb: 4,
    px: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    [theme.breakpoints.up('sm')]: {
      pt: 3,
      width: '50%',
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      fontSize: '1.2rem',
    },
  };

  const modalIcon = () => {
    if (isSuccess) {
      return <CheckCircleOutlineIcon color='success' fontSize='large' />;
    } else {
      return <ErrorIcon color='error' fontSize='large' />;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        {modalIcon()}
        <p>{msg}</p>
        <Button
          color='secondary'
          variant='contained'
          href={btnLink}
          endIcon={<BookIcon />}
        >
          {btnText}
        </Button>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;
