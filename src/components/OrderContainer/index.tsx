import React from 'react';
import data from '../../mock/user.json'
import { Container, OrderName, OrderNumber } from './styles';

interface OrderContainerProps {
    onSelectOrder: (orderNumber: string) => void;
  }
  
  const OrderContainer: React.FC<OrderContainerProps> = ({ onSelectOrder }) => {
    return (
      <>
        {data.orders.map(order => (
          <Container key={order.id} onClick={() => onSelectOrder(order.orderNumber)}>
          <OrderName>Pedido</OrderName>
          <OrderNumber>{order.orderNumber}</OrderNumber>
        </Container>
      ))}
    </>
  );
};

export default OrderContainer;
