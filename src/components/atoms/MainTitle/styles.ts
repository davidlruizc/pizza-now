import { Label } from 'reactstrap';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px;
`;

export const Title = styled(Label)`
  font-weight: bold;
  font-size: 38px;
  margin-bottom: 0;
`;

export const PizzaIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 15px;
`;
