import Content from 'components/molecules/Content';
import Header from 'components/molecules/Header';
import Orders from 'components/molecules/Orders';
import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

const HomeList: React.FC = () => {
  const history = useHistory();

  const onCreatePizza = () => {
    history.push(NavigationUrls.createPizza);
  };
  return (
    <Content>
      <Header onNavigate={onCreatePizza} />
      <Orders />
    </Content>
  );
};

export default HomeList;
