import Content from 'components/molecules/Content';
import Header from 'components/molecules/Header';
import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

const CreatePizza: React.FC = () => {
  const history = useHistory();

  const onListPizzas = () => {
    history.push(NavigationUrls.root);
  };

  return (
    <Content>
      <Header onNavigate={onListPizzas} close={true} />
    </Content>
  );
};

export default CreatePizza;
