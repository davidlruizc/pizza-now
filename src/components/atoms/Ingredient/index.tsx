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
  quantity: number;
  addIngredient: () => void;
  removeIngredient: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({
  ingredient,
  price,
  disabled,
  quantity,
  addIngredient,
  removeIngredient,
}) => {
  return (
    <IngredientsContainer>
      <ContentWrapper>
        <Content>{ingredient}</Content>
        <SubContent>{FormatCurrency(price)}</SubContent>
      </ContentWrapper>
      <IngredientsCounter>
        <InputGroupAddon addonType="prepend">
          <Button onClick={removeIngredient} disabled={disabled} className="remove-btn">
            <i className="fa fa-minus" />
          </Button>
        </InputGroupAddon>
        <IngredientsInput readOnly={true} value={quantity} min="0" max="8" />
        <InputGroupAddon addonType="append">
          <Button onClick={addIngredient} disabled={disabled} id="add-btn">
            <i className="fa fa-plus" />
          </Button>
        </InputGroupAddon>
      </IngredientsCounter>
    </IngredientsContainer>
  );
};

export default Ingredient;
