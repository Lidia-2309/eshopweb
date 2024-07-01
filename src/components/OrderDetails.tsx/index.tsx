import React from 'react';
import { Address, Container, DeliveryPrediction, DetailItem, Details, OrderNumber, Title, Total } from './styles';

interface OrderDetailsProps {
  orderNumber: string;
  deliveryPrediction: string;
  details: { item: string; quantity: number }[];
  total: number;
  address: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderNumber, deliveryPrediction, details, total, address }) => {
  return (
    <Container>
      <Title>Pedido</Title>
      <OrderNumber>Número do Pedido: {orderNumber}</OrderNumber>
      <DeliveryPrediction>Previsão de Entrega: {deliveryPrediction}</DeliveryPrediction>
      <Details>
        {details.map((detail, index) => (
          <DetailItem key={index}>{detail.quantity}x {detail.item}</DetailItem>
        ))}
      </Details>
      <Total>Total: R${total}</Total>
      <Address>Endereço: {address}</Address>
    </Container>
  );
};

export default OrderDetails;
