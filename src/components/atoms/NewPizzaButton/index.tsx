import * as React from 'react';
import { ButtonStyled } from './styles';

interface NewPizzaButtonProps {
  onClick: () => void;
  close?: boolean;
}

const NewPizzaButton: React.FC<NewPizzaButtonProps> = ({ onClick, close }) => {
  return (
    <ButtonStyled size="lg" onClick={onClick}>
      <i className={close ? 'fa fa-times' : 'fa fa-plus'} />
    </ButtonStyled>
  );
};

export default NewPizzaButton;
