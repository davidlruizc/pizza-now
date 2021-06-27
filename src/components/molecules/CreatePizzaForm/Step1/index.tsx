import { SetFinalPrice, UpdateIngredients } from 'actions/redux/ingredientsAction';
import Ingredient from 'components/atoms/Ingredient';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { RootState } from 'states';
import { FormatCurrency, RandomPizzaImage } from 'utils';
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
  const finalPriceSelector = useSelector((state: RootState) => state.IngredientsReducer.finalPrice);
  const dispatch = useDispatch();

  const addIngredient = (ingredient: IIngredientsSelection) => {
    let increaseQuantity = { ...ingredient, quantity: ingredient.quantity + 1 };

    dispatch(UpdateIngredients(increaseQuantity));
  };

  const removeIngredient = (ingredient: IIngredientsSelection) => {
    if (ingredient.quantity !== 0) {
      let increaseQuantity = { ...ingredient, quantity: ingredient.quantity - 1 };

      dispatch(UpdateIngredients(increaseQuantity));
    }
  };

  React.useEffect(() => {
    let total = 0;
    for (let i = 0; i < ingredients.length; i++) {
      total += ingredients[i].quantity * ingredients[i].price;
    }

    const finalPrice = Math.round(total * 100) / 100;
    dispatch(SetFinalPrice(finalPrice));
  }, [ingredients, dispatch]);

  return (
    <StepContainer>
      <StepImage top width="100%" src={RandomPizzaImage()} alt="Card image cap" />
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient.ingredient}
          price={ingredient.price}
          disabled={ingredient.disabled}
          quantity={ingredient.quantity}
          addIngredient={() => addIngredient(ingredient)}
          removeIngredient={() => removeIngredient(ingredient)}
        />
      ))}
      <PriceWrapper>
        <PriceLabel>Precio Total:</PriceLabel>
        <PriceValue>{FormatCurrency(finalPriceSelector)}</PriceValue>
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
