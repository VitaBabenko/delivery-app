import { Outlet } from 'react-router-dom';
import { Wrapper, Section, List, ListItem, NavLink } from './Shops.styled';

export const Shops = () => {
  return (
    <Wrapper>
      <Section>
        <h2>Shops:</h2>
        <List>
          <ListItem>
            <NavLink to="mcdonny"> Mc Donny</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="cfk"> CFK</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="papajyhn"> Papa Jyhn</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="#"> Don Market</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="#"> Resto Cafe</NavLink>
          </ListItem>
        </List>
      </Section>
      <Outlet />
    </Wrapper>
  );
};
