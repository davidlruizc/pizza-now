import { BACKGROUND_COLOR } from 'assets/styles/colors';
import { Input, InputGroup, Label } from 'reactstrap';
import styled from 'styled-components';

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: ${BACKGROUND_COLOR};
`;

export const IngredientsCounter = styled(InputGroup)`
  width: 150px;
`;

export const IngredientsInput = styled(Input)`
  height: 100%;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  flex-direction: row;
`;

export const Content = styled(Label)`
  margin: 0;
  align-self: center;
  width: 100%;
  font-weight: bold;
`;

export const SubContent = styled(Label)`
  width: 100%;
`;
