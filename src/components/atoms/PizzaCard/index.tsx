import ModalPizza from 'components/molecules/Modal';
import * as React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { FormatCurrency, formatHumanizeDate } from 'utils';
import { CardContainer, PizzaImage } from './styles';

interface PizzaCardProps extends IOrder {}

const PizzaCard: React.FC<PizzaCardProps> = ({
  image,
  pizzaName,
  price,
  date,
  name,
  ingredients,
  phone,
}) => {
  const [modal, setModal] = React.useState<boolean>(false);

  const toggle = () => setModal(!modal);
  return (
    <CardContainer>
      <Card>
        <PizzaImage top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2">{pizzaName}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            {formatHumanizeDate(date)}
          </CardSubtitle>
          <CardText>{FormatCurrency(price)}</CardText>
          <Button onClick={toggle} color="primary">
            Ver más
          </Button>
        </CardBody>
      </Card>
      <ModalPizza
        modal={modal}
        toggle={toggle}
        image={image}
        pizzaName={pizzaName}
        price={price}
        name={name}
        date={date}
        ingredients={ingredients}
        phone={phone}
      />
    </CardContainer>
  );
};

export default PizzaCard;
