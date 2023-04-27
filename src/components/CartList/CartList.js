import { useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/cart-selector';
import CartItem from './CartItem/CartItem';

import { Ul } from './CartList.styled';

const CartList = () => {
  const cart = useSelector(getCart);

  return (
    <Ul>
      {cart.map(({ id, title, description, price, image, count }) => (
        <CartItem
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          image={image}
          count={count}
        />
      ))}
    </Ul>
  );
};

export default CartList;
