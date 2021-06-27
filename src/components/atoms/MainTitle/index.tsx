import * as React from 'react';
import { Container, PizzaIcon, Title } from './styles';
import PizzaEmoji from 'assets/images/pizza.png';

const MainTitle: React.FC = () => {
  return (
    <Container>
      <Title>Pizza Now</Title>
      <PizzaIcon src={PizzaEmoji} alt="pizza-emoji" />
    </Container>
  );
};

export default MainTitle;
