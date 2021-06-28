import { Label } from 'reactstrap';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Title = styled(Label)`
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 0;
`;

export const PizzaIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 15px;
`;
