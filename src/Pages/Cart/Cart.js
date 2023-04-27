import { useDispatch, useSelector } from 'react-redux';
import CartList from '../../components/CartList/CartList';
import { getCart } from '../../redux/cart/cart-selector';
import Button from '@mui/joy/Button';
import { Link, DivButton, P } from './Cart.styled';
import TotalPriceCart from '../../components/TotalPriceCart/TotalPriceCart';
import { deleteCart } from '../../redux/cart/cart-actions';

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <>
      {cart.length !== 0 ? (
        <>
          <CartList />
          <TotalPriceCart />
          <DivButton>
            <Button
              onClick={() => dispatch(deleteCart())}
              size="sm"
              color="success"
            >
              Make an order
            </Button>
          </DivButton>
        </>
      ) : (
        <P>
          Please, choose pizza
          <Link to="/">
            <Button
              style={{
                height: '30px',
                marginLeft: '10px',
              }}
              size="sm"
              color="success"
            >
              here
            </Button>
          </Link>
        </P>
      )}
    </>
  );
};

export default Cart;
