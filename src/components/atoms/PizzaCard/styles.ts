import { CardImg } from 'reactstrap';
import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: 25px;
`;

export const PizzaImage = styled(CardImg)`
  object-fit: cover;
  height: 250px;
`;
