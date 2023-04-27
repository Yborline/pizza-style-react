import { useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/cart-selector';
import { P } from './TotalPriceCart.styled';

const TotalPriceCart = () => {
  const cart = useSelector(getCart);
  const TotalPrice = cart.reduce(
    (totalPrice, item) => totalPrice + Number(item.price) * item.count,
    0,
  );
  return <P>Total: {TotalPrice} UAH</P>;
};

export default TotalPriceCart;
