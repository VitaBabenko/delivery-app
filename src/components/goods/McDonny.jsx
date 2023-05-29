import { useState, useEffect } from 'react';
// import { getGoods } from '../../goodsAPI/McDonnyAPI';
import { GetProducts } from '../../services/GetProducts';
import { Loader } from '../Loader';
// import burger from '../../images/burger.jpg';
import { Section, List, ListItem, Img, Title, Btn } from './Goods.styled';

export const McDonny = ({ onAddToCart }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(products);
  // const goods = getGoods();

  useEffect(() => {
    setLoading(true);

    GetProducts()
      .then(respProducts => {
        console.log(respProducts);
        setProducts(respProducts);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {!error && !loading && (
        <List>
          {products.map(product => (
            <ListItem key={product._id}>
              <Img src={product.photo} alt="burger" />
              <Title>{product.name}</Title>
              <Btn type="button" onClick={() => onAddToCart(product._id)}>
                add to Cart
              </Btn>
            </ListItem>
          ))}
        </List>
      )}
    </Section>
  );
};
