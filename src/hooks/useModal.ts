import { useState } from 'react';

interface ModalData {
  msg: string;
  btnText: string;
  btnLink: string;
}

export function useModal() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const setModalDataState = (data: ModalData | null) => {
    setModalData(data);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return { open, handleOpen, handleClose, modalData, setModalDataState };
}
