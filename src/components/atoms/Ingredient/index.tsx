import * as React from 'react';
import { Button, InputGroupAddon } from 'reactstrap';
import { FormatCurrency } from 'utils';
import {
  Content,
  ContentWrapper,
  IngredientsContainer,
  IngredientsCounter,
  IngredientsInput,
  SubContent,
} from './styles';

interface IngredientProps {
  ingredient: string;
  price: number;
  disabled?: boolean;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, price, disabled }) => {
  const [value, setValue] = React.useState<number>(0);

  const addIngredient = () => {
    setValue((prevState) => prevState + 1);
  };

  const removeIngredient = () => {
    setValue((prevState) => {
      if (prevState !== 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  return (
    <IngredientsContainer>
      <ContentWrapper>
        <Content>{ingredient}</Content>
        <SubContent>{FormatCurrency(price)}</SubContent>
      </ContentWrapper>
      <IngredientsCounter>
        <InputGroupAddon addonType="prepend">
          <Button onClick={removeIngredient} disabled={disabled}>
            <i className="fa fa-minus" />
          </Button>
        </InputGroupAddon>
        <IngredientsInput readOnly={false} value={value} min="0" max="8" />
        <InputGroupAddon addonType="append">
          <Button onClick={addIngredient} disabled={disabled}>
            <i className="fa fa-plus" />
          </Button>
        </InputGroupAddon>
      </IngredientsCounter>
    </IngredientsContainer>
  );
};

export default Ingredient;
