import { Label } from 'reactstrap';
import styled from 'styled-components';
import { device } from 'utils/responsiveTemplate';

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const NoOrderImageStyled = styled.img`
  height: 300px;
  object-fit: cover;

  @media ${device.mobile} {
    height: 200px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentLabel = styled(Label)`
  text-align: center;
`;
