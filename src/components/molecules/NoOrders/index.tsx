import * as React from 'react';
import { Button, Col } from 'reactstrap';
import NoOrdersImage from 'assets/images/order.svg';
import {
  ContentLabel,
  ImageContainer,
  MainContent,
  NoOrderImageStyled,
  WrapperContent,
} from './styles';
import { NavigationUrls } from 'constants/navigationURLS';
import { useHistory } from 'react-router-dom';

const NoOrders: React.FC = () => {
  const history = useHistory();

  const CreatePizza = () => {
    history.push(NavigationUrls.createPizza);
  };

  return (
    <Col sm="12">
      <MainContent>
        <ImageContainer>
          <NoOrderImageStyled src={NoOrdersImage} alt="no orders yet" />
        </ImageContainer>
        <WrapperContent>
          <ContentLabel>No tienes ninguna orden aún.</ContentLabel>
          <Button onClick={CreatePizza} color="primary">
            Crear orden
          </Button>
        </WrapperContent>
      </MainContent>
    </Col>
  );
};

export default NoOrders;
