import * as React from 'react';
import { Button, InputGroupAddon } from 'reactstrap';
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
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, price }) => {
  return (
    <IngredientsContainer>
      <ContentWrapper>
        <Content>{ingredient}</Content>
        <SubContent>${price}</SubContent>
      </ContentWrapper>
      <IngredientsCounter>
        <InputGroupAddon addonType="prepend">
          <Button>
            <i className="fa fa-minus" />
          </Button>
        </InputGroupAddon>
        <IngredientsInput readOnly={true} value={8} min="0" max="8" />
        <InputGroupAddon addonType="append">
          <Button>
            <i className="fa fa-plus" />
          </Button>
        </InputGroupAddon>
      </IngredientsCounter>
    </IngredientsContainer>
  );
};

export default Ingredient;
