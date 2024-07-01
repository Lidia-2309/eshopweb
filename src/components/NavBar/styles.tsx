import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary_colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const LogoImg = styled.img`
  height: 30px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-right: 1rem;
  font-family: ${({ theme }) => theme.fonts.roboto};
  color: ${({ theme }) => theme.colors.primary_colors.lilac};
  font-size: 1rem;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;