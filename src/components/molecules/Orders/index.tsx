import PizzaCard from 'components/atoms/PizzaCard';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { RootState } from 'states';
import { MainWrapper, Title } from './styles';

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orderReducer.orders);
  const [sortOrders, setSortOrders] = React.useState<IOrder[] | null>(null);

  React.useEffect(() => {
    const sortOrder = orders.sort((a: any, b: any) => b.date - a.date);
    setSortOrders(sortOrder);
  }, [orders]);

  return (
    <MainWrapper>
      <Row>
        <Col sm="12">
          <Title>Mis ventas</Title>
        </Col>
      </Row>
      <Row>
        {sortOrders && (
          <React.Fragment>
            {sortOrders.length > 0 ? (
              <React.Fragment>
                {sortOrders.map((order, index) => (
                  <Col sm="4" key={index}>
                    <PizzaCard {...order} />
                  </Col>
                ))}
              </React.Fragment>
            ) : (
              <div>no hay ordenes listas</div>
            )}
          </React.Fragment>
        )}
      </Row>
    </MainWrapper>
  );
};

export default Orders;
