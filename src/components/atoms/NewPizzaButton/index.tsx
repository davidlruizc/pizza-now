import * as React from 'react';
import { ButtonStyled } from './styles';

interface NewPizzaButtonProps {
  onClick: () => void;
}

const NewPizzaButton: React.FC<NewPizzaButtonProps> = ({ onClick }) => {
  return (
    <ButtonStyled color="primary" size="lg" onClick={onClick}>
      <i className="fa fa-plus" />
    </ButtonStyled>
  );
};

export default NewPizzaButton;
