import { useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/cart-selector';
import CartItem from './CartItem/CartItem';

import { Ul } from './CartList.styled';

const CartList = () => {
  const cart = useSelector(getCart);

  return (
    <Ul>{cart && cart.map(item => <CartItem key={item.id} item={item} />)}</Ul>
  );
};

export default CartList;
