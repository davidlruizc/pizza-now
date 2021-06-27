import Content from 'components/molecules/Content';
import Header from 'components/molecules/Header';
import Orders from 'components/molecules/Orders';
import * as React from 'react';

const HomeList: React.FC = () => {
  return (
    <Content>
      <Header />
      <Orders />
    </Content>
  );
};

export default HomeList;
