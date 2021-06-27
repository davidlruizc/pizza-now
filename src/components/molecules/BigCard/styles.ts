import { Card, CardBody, Row } from 'reactstrap';
import styled from 'styled-components';

export const BodyCard = styled(CardBody)<{ padding?: boolean; height?: string }>`
  padding: ${(props) => (props.padding ? '1.5rem' : '0')} !important;
  width: 100%;
  height: ${(props) => (props.height ? props.height : '100%')};
`;

export const CardContainer = styled(Card)`
  margin-top: 1em;
  color: black;
`;

export const SubTitle = styled.p`
  margin-bottom: 0;
  opacity: 0.7;
  font-size: 0.8em;
`;

export const CardRow = styled(Row)``;
