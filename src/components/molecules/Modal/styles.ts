import { CardImg, Label } from 'reactstrap';
import styled from 'styled-components';

export const PizzaImage = styled(CardImg)`
  object-fit: cover;
  height: 250px;
`;

export const MainModalTitle = styled(Label)`
  width: 100%;
  font-weight: bold;
  font-size: 28px;
`;

export const ModalSubTitle = styled(Label)`
  width: 100%;
  font-weight: bold;
  font-size: 22px;
`;

export const ModalContentBold = styled.span`
  font-weight: bold;
`;

export const ModalContent = styled.li`
  width: 100%;
`;
