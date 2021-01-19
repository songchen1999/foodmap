import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Lorem,
    PopoverCloseButton,
  } from "@chakra-ui/react"

 function Pop(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <div>
        <div onClick={onOpen}>{props.bar}</div>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl" >
          <ModalOverlay />
          <ModalContent>
            {props.popBar}
          </ModalContent>
        </Modal>
      </div>
    )
  }

  export default Pop;