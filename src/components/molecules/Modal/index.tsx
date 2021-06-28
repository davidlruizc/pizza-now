import { PizzaImage } from 'components/atoms/PizzaCard/styles';
import * as React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FormatCurrency, formatHumanizeDate } from 'utils';
import { MainModalTitle, ModalContent, ModalContentBold, ModalSubTitle } from './styles';

interface ModalPizzaProps extends IOrder {
  modal: boolean;
  toggle: () => void;
}

const ModalPizza: React.FC<ModalPizzaProps> = ({
  modal,
  toggle,
  pizzaName,
  image,
  price,
  date,
  name,
  ingredients,
  phone,
}) => {
  const ingredientsText = React.useCallback((quantity: number, type: string) => {
    if (quantity === 1) {
      return `${quantity} porción de ${type}`;
    } else {
      return `${quantity} porciones de ${type}`;
    }
  }, []);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Detalle de la orden</ModalHeader>
      <PizzaImage bottom width="100%" src={image} alt="Card image cap" />
      <ModalBody>
        <MainModalTitle>{pizzaName}</MainModalTitle>
        <ModalSubTitle>Ingredientes:</ModalSubTitle>
        <ul>
          {ingredients.map((ingredient) => {
            if (ingredient.quantity > 0) {
              return (
                <ModalContent key={ingredient.id}>
                  {ingredientsText(ingredient.quantity, ingredient.ingredient)}
                </ModalContent>
              );
            }
            return null;
          })}
        </ul>
        <ModalSubTitle>Información de la ordén:</ModalSubTitle>
        <ul>
          <ModalContent>
            <ModalContentBold>Nombre: </ModalContentBold> {name}
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Teléfono: </ModalContentBold> {phone}
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Fecha: </ModalContentBold> {formatHumanizeDate(date)}
          </ModalContent>
          <ModalContent>
            <ModalContentBold>Precio: </ModalContentBold> {FormatCurrency(price)}
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
