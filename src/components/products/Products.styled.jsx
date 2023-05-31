import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 80px;
  row-gap: 30px;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    width: 400px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

export const ListItem = styled.li`
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 15px;

  @media (min-width: 1200px) {
    width: 250px;
  }
`;

export const Title = styled.h3`
  margin: 5px 0;

  @media (min-width: 1200px) {
    margin: 10px 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  margin-left: 100px;
  margin-right: 0;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;

  &:hover {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05);
    border-color: #5cd3a8;
    color: #5cd3a8;
  }

  @media (min-width: 1200px) {
    margin-left: 155px;
    margin-right: 0;
    padding: 8px;
  }
`;
