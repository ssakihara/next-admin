import { Modal, Spinner, ModalOverlay, Box } from '@chakra-ui/react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { nowLoadingState } from 'store/app';

const App: React.FC = () => {
  const [value, setValue] = useRecoilState(nowLoadingState);
  const onClose = () => {
    setValue(!value);
  };
  return (
    <Modal closeOnOverlayClick={false} isOpen={value} onClose={onClose}>
      <ModalOverlay />
      <Box align="center">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Box>
    </Modal>
  );
};

export default App;
