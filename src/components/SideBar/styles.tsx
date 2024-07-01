import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 93vh;
  background-color: ${({ theme }) => theme.colors.primary_colors.lilac};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adicionando sombra */
`;

export const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary_colors.white};
  font-family: ${({ theme }) => theme.fonts.inter};
  margin-bottom: 2rem;
  margin-top: 1rem;
  font-weight: 500;
`;