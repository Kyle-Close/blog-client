import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BookIcon from '@mui/icons-material/Book';

interface CreatePostModalProps {
  open: boolean;
  handleClose: () => void;
  msg: string;
  btnText: string;
  btnLink: string;
}

function CreatePostModal({
  open,
  handleClose,
  msg,
  btnText,
  btnLink,
}: CreatePostModalProps) {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: '#282828',
    color: '#e6e3e3',
    border: '2px solid #000',
    boxShadow: 24,
    py: 6,
    px: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    textAlign: 'center',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        <Typography
          id='modal-modal-description'
          sx={{ mt: 2, fontWeight: 500 }}
        >
          {msg}
        </Typography>
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
