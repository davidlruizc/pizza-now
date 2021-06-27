import Ingredient from 'components/atoms/Ingredient';
import * as React from 'react';
import { Button } from 'reactstrap';
import {
  NextWrapper,
  PriceLabel,
  PriceValue,
  PriceWrapper,
  StepContainer,
  StepImage,
} from './styles';

interface Step1Props {
  onNextStep: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNextStep }) => {
  return (
    <StepContainer>
      <StepImage
        top
        width="100%"
        src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=831&q=80"
        alt="Card image cap"
      />
      <Ingredient ingredient="Pepperoni" price={4500} />
      <Ingredient ingredient="Pollo" price={5000} />
      <Ingredient ingredient="Queso" price={3000} />
      <Ingredient ingredient="Jamón" price={3000} />
      <Ingredient ingredient="Tocineta" price={3000} />
      <Ingredient ingredient="Chorizo" price={3000} />
      <Ingredient ingredient="Salchicha" price={3000} />
      <Ingredient ingredient="Jalapeños" price={3000} />
      <Ingredient ingredient="Aceitunas" price={3000} />
      <Ingredient ingredient="Tomates" price={3000} />
      <Ingredient ingredient="Chile" price={3000} />
      <Ingredient ingredient="Mostaza" price={3000} />
      <Ingredient ingredient="Piña" price={3000} />
      <Ingredient ingredient="Maíz" price={3000} />
      <Ingredient ingredient="Huevo" price={3000} />
      <Ingredient ingredient="Masa" price={10000} disabled={true} />
      <PriceWrapper>
        <PriceLabel>Precio Total:</PriceLabel>
        <PriceValue>$100000</PriceValue>
      </PriceWrapper>
      <NextWrapper>
        <Button color="primary" size="lg" block onClick={onNextStep}>
          Siguiente
        </Button>
      </NextWrapper>
    </StepContainer>
  );
};

export default Step1;
