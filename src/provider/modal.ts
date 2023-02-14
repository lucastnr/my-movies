import { ModalProps } from "@chakra-ui/react";
import constate from "constate";
import { useCallback, useState } from "react";

type Content = JSX.Element | null;
type Size = ModalProps["size"];

interface Modal {
  content: Content;
  size: Size;
  afterClose?: () => void;
}

// Initial modal state
const initialModal = {
  content: null,
  size: "4xl",
};

function useModalFunction() {
  const [modal, setModal] = useState<Modal>(initialModal);

  console.log(modal);

  // Open modal
  const onOpen = useCallback(
    (content: Content, size?: Size, afterClose?: () => void) =>
      setModal({ content, size: size ?? initialModal.size, afterClose }),
    []
  );

  // Close modal
  const onClose = useCallback(() => {
    setModal({ ...initialModal, size: modal?.size });
  }, [modal]);

  return { modal, onOpen, onClose };
}

export const [ModalProvider, useModal] = constate(useModalFunction);
