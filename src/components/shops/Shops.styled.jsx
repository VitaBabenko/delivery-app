import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 40px;
  }

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;

export const Section = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    width: 300px;
    padding: 15px;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 1200px) {
    max-width: 350px;
  }
`;

export const Title = styled.h2`
  margin: 0;

  @media (min-width: 768px) {
    margin: 15px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;

  @media (min-width: 1200px) {
    gap: 35px;
  }
`;

export const ListItem = styled.li`
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  padding: 10px;
  width: 150px;

  @media (min-width: 1200px) {
    width: 200px;
    padding: 15px;
  }

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

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
