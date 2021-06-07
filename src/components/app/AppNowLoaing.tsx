import { Modal, Spinner, ModalOverlay, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';


const state = atom({
  key: 'app/nowLoading',
  default: true
})
const App: React.FC = () => {
  const [value, setValue] = useRecoilState(state)
  const onClose = () => {
    setValue(!value)
  }
  useEffect(() => {
    setTimeout(() => {
      setValue(!value)
    }, 2000);
  }, [])
  return (
    <Modal closeOnOverlayClick={false} isOpen={value} onClose={onClose} >
      <ModalOverlay />
      <Text align="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        /></Text>
    </Modal >
  );
};

export default App;
