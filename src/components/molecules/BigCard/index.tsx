import * as React from 'react';
import { Col } from 'reactstrap';
import { BodyCard, CardContainer, CardRow, SubTitle } from './styles';

interface BigCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const BigCard: React.FC<BigCardProps> = ({ children, title, subtitle }) => {
  return (
    <CardContainer className="shadow bg-secondary">
      <div className="bg-white border-0 card-header">
        <CardRow>
          <Col sm="12">
            <h2 className={'mb-0'}>{title}</h2>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
          </Col>
        </CardRow>
      </div>
      <BodyCard>{children}</BodyCard>
    </CardContainer>
  );
};

export default BigCard;
