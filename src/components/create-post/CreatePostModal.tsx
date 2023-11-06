import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CreatePostModalProps {
  open: boolean;
  handleClose: () => void;
}

function CreatePostModal({ open, handleClose }: CreatePostModalProps) {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Text in a modal
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
}

export default CreatePostModal;
