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
        <SubContent>${price}</SubContent>
      </ContentWrapper>
      <IngredientsCounter>
        <InputGroupAddon addonType="prepend">
          <Button onClick={removeIngredient}>
            <i className="fa fa-minus" />
          </Button>
        </InputGroupAddon>
        <IngredientsInput readOnly={true} value={value} min="0" max="8" />
        <InputGroupAddon addonType="append">
          <Button onClick={addIngredient}>
            <i className="fa fa-plus" />
          </Button>
        </InputGroupAddon>
      </IngredientsCounter>
    </IngredientsContainer>
  );
};

export default Ingredient;
