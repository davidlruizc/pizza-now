import Content from 'components/molecules/Content';
import Header from 'components/molecules/Header';
import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { ContentLabel, ImageNotFound, MainContainer, WrapperContent } from './styles';
import NoFoundImage from 'assets/images/not-found.svg';
import { Button } from 'reactstrap';

const NotFound: React.FC = () => {
  const history = useHistory();

  const onListPizzas = () => {
    history.push(NavigationUrls.root);
  };

  return (
    <Content>
      <Header onNavigate={onListPizzas} close={true} />
      <MainContainer>
        <ImageNotFound src={NoFoundImage} />
        <WrapperContent>
          <ContentLabel>404 Página no encontrada</ContentLabel>
          <Button onClick={onListPizzas} color="primary">
            Volver al inicio
          </Button>
        </WrapperContent>
      </MainContainer>
    </Content>
  );
};

export default NotFound;
