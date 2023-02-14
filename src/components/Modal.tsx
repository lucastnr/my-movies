import {
  CloseButton,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useModal } from "../provider/modal";

export const Modal: React.FC = () => {
  const {
    modal: { content, size = "full", afterClose },
    onClose,
  } = useModal();

  const handleOnClose = () => {
    onClose();
    afterClose && afterClose();
  };

  return (
    <ChakraModal
      isOpen={!!content}
      onClose={handleOnClose}
      size={size}
      isCentered
    >
      <ModalOverlay />
      <ModalContent maxH="90vh" overflowX="auto">
        <CloseButton
          position="absolute"
          right={0}
          m={2}
          onClick={handleOnClose}
        />
        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
