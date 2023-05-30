import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

export const Section = styled.section`
  border: 1px solid black;
  border-radius: 20px;
  width: 800px;
  padding: 15px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 70px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px;
`;

export const Img = styled.img`
  width: 250px;
  border-radius: 15px;
`;

export const Wrap = styled.div`
  flex-direction: column;
`;

export const Btn = styled.button`
  display: block;
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
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
`;
