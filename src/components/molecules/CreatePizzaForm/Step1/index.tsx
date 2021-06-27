import Ingredient from 'components/atoms/Ingredient';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { RootState } from 'states';
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
  const ingredients = useSelector((state: RootState) => state.IngredientsReducer.ingredients);

  return (
    <StepContainer>
      <StepImage
        top
        width="100%"
        src="https://images.unsplash.com/photo-1571066811602-716837d681de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=831&q=80"
        alt="Card image cap"
      />
      {ingredients.map((ingredient) => (
        <Ingredient
          ingredient={ingredient.ingredient}
          price={ingredient.price}
          disabled={ingredient.disabled}
        />
      ))}
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
