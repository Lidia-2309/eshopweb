import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: rgba(255, 255, 255, 0.1); /* Transparente */
  border: 1px solid ${({ theme }) => theme.colors.primary_colors.white};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary_colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  :hover{
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export const OrderName = styled.span`
  font-size: 0.8rem;

`;

export const OrderNumber = styled.span`
  font-size: 0.8rem;
`;