import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary_colors.blueLight};
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary_colors.lilac};
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

export const OrderNumber = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const DeliveryPrediction = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0.5rem;
`;

export const DetailItem = styled.li`
  font-size: 0.9rem;
`;

export const Total = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Address = styled.p`
  font-size: 0.9rem;
`;