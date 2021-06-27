import MainTitle from 'components/atoms/MainTitle';
import NewPizzaButton from 'components/atoms/NewPizzaButton';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { HeaderContainer, RightButton } from './styles';

interface HeaderProps {
  onNavigate: () => void;
  close?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, close }) => {
  return (
    <HeaderContainer>
      <Row>
        <Col xs="6">
          <MainTitle />
        </Col>
        <Col xs="6">
          <RightButton>
            <NewPizzaButton onClick={onNavigate} close={close} />
          </RightButton>
        </Col>
      </Row>
    </HeaderContainer>
  );
};

export default Header;
