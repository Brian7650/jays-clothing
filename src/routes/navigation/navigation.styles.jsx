import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: white;
  color: black;
  padding: 10px;
  padding-bottom: 15px;
`;

export const LogoContainer = styled(Link)`
  height: 50%;
  width: 70px;
  padding: 25px;
  padding-top: 100;
  img {
    max-width: 250%;

  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
