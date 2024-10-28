'use client';

import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"; // Asegúrate de importar React
import { Modal, Button, Box } from '@mui/material';

export const CustomModal = forwardRef(({ children }, ref) => {
  const [open, setOpen] = useState(false); // Cambia React.useState a useState

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({
    openModal: handleOpen,
    closeModal: handleClose,
  }));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="flex justify-center items-center"
    >
      <Box className="dialog rounded-2xl bg-gray-800 p-6 w-[960px] max-w-[80%] border-none">
        <header className="flex justify-end">
          <Button
            onClick={handleClose}
            className="  background-color: transparent;
                          cursor: pointer;
                          border: none;
                          color: #E1E1E1;
                          font-size: 18px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 150%;ormal leading-[150%]"
          >
            X
          </Button>
        </header>
        <div>
          {children}
        </div>
      </Box>
    </Modal>
  );
});


