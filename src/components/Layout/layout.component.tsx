// DEPENDENCIES
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// STYLED COMPONENTS
import { LayoutContainer, HeaderContainer } from "./layout.styled";

const Layout: React.FC<{}> = (): React.ReactElement => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <NavLink to="/exercise1">Exercise 1</NavLink>
        <NavLink to="/exercise2">Exercise 2</NavLink>
      </HeaderContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
