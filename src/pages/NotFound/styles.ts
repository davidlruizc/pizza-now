import { Label } from 'reactstrap';
import styled from 'styled-components';
import { device } from 'utils/responsiveTemplate';

export const MainContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImageNotFound = styled.img`
  height: 500px;
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
