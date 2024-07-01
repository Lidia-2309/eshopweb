import React from 'react';
import { SidebarContainer, SidebarTitle } from './styles';

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarContainer>
      <SidebarTitle>Orders</SidebarTitle>
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;
