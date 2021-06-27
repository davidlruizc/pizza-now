import * as React from 'react';
import { Col } from 'reactstrap';
import { BodyCard, CardContainer, CardRow, SubTitle } from './styles';

interface BigCardProps {
  children: React.ReactNode;
  title: string;
  padding?: string;
  height?: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
}

const BigCard: React.FC<BigCardProps> = ({
  children,
  title,
  padding,
  height,
  subtitle,
  actionButton,
}) => {
  return (
    <CardContainer className="shadow bg-secondary">
      <div className="bg-white border-0 card-header">
        <CardRow>
          <Col sm="12">
            <h2 className={'mb-0'}>{title}</h2>
            {subtitle && <SubTitle>{subtitle}</SubTitle>}
          </Col>
          {actionButton && (
            <Col xs={4} md={4} sm={4}>
              {actionButton}
            </Col>
          )}
        </CardRow>
      </div>
      <BodyCard padding={padding} height={height}>
        {children}
      </BodyCard>
    </CardContainer>
  );
};

export default BigCard;
