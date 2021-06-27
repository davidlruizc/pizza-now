import * as React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { CardContainer, PizzaImage } from './styles';

const PizzaCard = () => {
  return (
    <CardContainer>
      <Card>
        <PizzaImage
          top
          width="100%"
          src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=831&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h2">Pizza a la embeces</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            hace 15 min
          </CardSubtitle>
          <CardText>$500</CardText>
          <Button color="primary">Ver más</Button>
        </CardBody>
      </Card>
    </CardContainer>
  );
};

export default PizzaCard;
