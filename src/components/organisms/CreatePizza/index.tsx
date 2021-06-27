import BigCard from 'components/molecules/BigCard';
import Content from 'components/molecules/Content';
import Header from 'components/molecules/Header';
import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';

const CreatePizza: React.FC = () => {
  const history = useHistory();

  const onListPizzas = () => {
    history.push(NavigationUrls.root);
  };

  return (
    <Content>
      <Header onNavigate={onListPizzas} close={true} />
      <Container>
        <BigCard
          title="Crea tu pizza"
          subtitle="Elige los sabores que más te gusten y arma una pizza a tu medida"
        >
          asdfs
        </BigCard>
      </Container>
    </Content>
  );
};

export default CreatePizza;
