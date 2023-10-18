import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #ffffff10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: white;
    transition: color 0.5s;
  }
`;

export const NavbarListLinks = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  li {
    margin: 1rem;
    a:hover {
      color: ${props => props.diff};
    }
  }
`;
