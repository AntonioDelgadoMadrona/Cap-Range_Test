// DEPENDENCIES
import styled from "styled-components";

export const LayoutContainer = styled.div.attrs({
  "data-testid": "layout-component",
})`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  justify-content: center;
  align-items: center;

  & > a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    opacity: 0.8;

    &.active {
      font-weight: bold;
      opacity: 1;
    }
  }
`;
