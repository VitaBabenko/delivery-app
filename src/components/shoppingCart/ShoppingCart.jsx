import { ContactForm } from '../contactForm/ContactForm';
import { Count } from '../count/Count';

export const ShoppingCart = ({
  goodsToCart,
  total,
  onDeleteFromShoppingCart,
  onIncrementCount,
  onDecrementCount,
  onChangeValue,
}) => {
  return (
    <>
      <ContactForm />
      <section>
        <ul>
          {goodsToCart.map(el => (
            <li key={el.id}>
              <img src="" alt="" />
              <h3>{el.name}</h3>
              <p>{el.totalPrice}</p>
              <Count
                count={el.count}
                incrementCount={onIncrementCount}
                decrementCount={onDecrementCount}
                id={el.id}
                changeValue={onChangeValue}
              />
              <button
                type="button"
                onClick={() => onDeleteFromShoppingCart(el.id)}
              >
                delete from Cart
              </button>
            </li>
          ))}
        </ul>
      </section>
      <div>
        {goodsToCart === [] && <h2>add to cart</h2>}
        <h3>Total price: {total}</h3>
        <button type="submit">Submit</button>
      </div>
    </>
  );
};
