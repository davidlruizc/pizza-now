import PizzaCard from 'components/atoms/PizzaCard';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import ModalPizza from '../Modal';
import { MainWrapper, Title } from './styles';

const Orders: React.FC = () => {
  const [modal, setModal] = React.useState<boolean>(false);

  const toggle = () => setModal(!modal);

  return (
    <MainWrapper>
      <Row>
        <Col sm="12">
          <Title>Mis ventas</Title>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <PizzaCard onClick={toggle} />
        </Col>
        <Col sm="4">
          <PizzaCard onClick={toggle} />
        </Col>
        <Col sm="4">
          <PizzaCard onClick={toggle} />
        </Col>
        <Col sm="4">
          <PizzaCard onClick={toggle} />
        </Col>
      </Row>
      <ModalPizza modal={modal} toggle={toggle} />
    </MainWrapper>
  );
};

export default Orders;
