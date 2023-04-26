import { useSelector } from 'react-redux';
import { getCart } from '../../redux/cart/cart-selector';
import CartItem from './CartItem/CartItem';
import { NavLink } from 'react-router-dom';
import Button from '@mui/joy/Button';
import { Link } from './CartList.styled';

const CartList = () => {
  const cart = useSelector(getCart);

  return (
    <ul>
      {cart.length !== 0 ? (
        <>
          {' '}
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
          <Button size="sm" color="success">
            Make an order
          </Button>
        </>
      ) : (
        <p>
          Please, choose pizza
          <Button size="sm" color="success">
            {' '}
            <Link to="/">here </Link>
          </Button>
        </p>
      )}
    </ul>
  );
};

export default CartList;
