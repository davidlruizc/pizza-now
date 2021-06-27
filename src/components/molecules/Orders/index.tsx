import PizzaCard from 'components/atoms/PizzaCard';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { MainWrapper, Title } from './styles';

const Orders: React.FC = () => {
  return (
    <MainWrapper>
      <Row>
        <Col sm="12">
          <Title>Mis ventas</Title>
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <PizzaCard />
        </Col>
        <Col sm="4">
          <PizzaCard />
        </Col>
        <Col sm="4">
          <PizzaCard />
        </Col>
        <Col sm="4">
          <PizzaCard />
        </Col>
      </Row>
    </MainWrapper>
  );
};

export default Orders;
