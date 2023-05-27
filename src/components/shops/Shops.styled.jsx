import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Section = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  padding: 15px;
  width: 250px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  padding: 10px;
  width: 150px;

  &:hover {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.12);
    border-color: #5cd3a8;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  &.active {
    color: #5cd3a8;
  }
`;
