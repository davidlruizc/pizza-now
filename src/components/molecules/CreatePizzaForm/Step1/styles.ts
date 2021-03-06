import { CardImg, Label } from 'reactstrap';
import styled from 'styled-components';
import { device } from 'utils/responsiveTemplate';

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10em;
  margin-left: 10em;
  margin-top: 25px;

  @media ${device.tablet} {
    margin-right: 4em;
    margin-left: 4em;
    margin-top: 25px;
  }

  @media ${device.mobile} {
    margin: 0;
    margin-top: 25px;
  }
`;

export const StepImage = styled(CardImg)`
  object-fit: cover;
  height: 250px;
`;

export const NextWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  width: 100%;
`;

export const PriceLabel = styled(Label)`
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  text-align: right;
`;

export const PriceValue = styled(Label)`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  text-align: right;
`;
