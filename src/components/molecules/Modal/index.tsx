import { PizzaImage } from 'components/atoms/PizzaCard/styles';
import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { MainModalTitle, ModalContent, ModalContentBold, ModalSubTitle } from './styles';

interface ModalPizzaProps {
  modal: boolean;
  toggle: () => void;
}

const ModalPizza: React.FC<ModalPizzaProps> = ({ modal, toggle }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Detalle de la orden</ModalHeader>
      <PizzaImage
        bottom
        width="100%"
        src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=831&q=80"
        alt="Card image cap"
      />
      <ModalBody>
        <MainModalTitle>Pizza Carnivora</MainModalTitle>
        <ModalSubTitle>Ingredientes:</ModalSubTitle>
        <ul>
          <ModalContent>2 porciones de Salchicha Americana</ModalContent>
          <ModalContent>2 porciones de Salchicha Americana</ModalContent>
        </ul>
        <ModalSubTitle>Información de la ordén:</ModalSubTitle>
        <ul>
          <ModalContent>
            <ModalContentBold>Nombre: </ModalContentBold> David Ruiz
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Teléfono: </ModalContentBold> 12312312312
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Fecha: </ModalContentBold> hace 20 min
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Precio: </ModalContentBold> $10000
          </ModalContent>
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalPizza;
