import MainTitle from 'components/atoms/MainTitle';
import NewPizzaButton from 'components/atoms/NewPizzaButton';
import { NavigationUrls } from 'constants/navigationURLS';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { HeaderContainer, RightButton } from './styles';

const Header: React.FC = () => {
  let history = useHistory();

  const onCreatePizza = () => {
    history.push(NavigationUrls.createPizza);
  };

  return (
    <HeaderContainer>
      <Row>
        <Col xs="6">
          <MainTitle />
        </Col>
        <Col xs="6">
          <RightButton>
            <NewPizzaButton onClick={onCreatePizza} />
          </RightButton>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
