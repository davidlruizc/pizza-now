import { BACKGROUND_COLOR, PRIMARY_COLOR } from 'assets/styles/colors';
import { Button } from 'reactstrap';
import styled from 'styled-components';

export const ButtonStyled = styled(Button)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${PRIMARY_COLOR};
  color: ${BACKGROUND_COLOR};
`;
