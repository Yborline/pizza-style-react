import Counter from '../../Counter/Counter';
import {
  changeDecrementItemCart,
  changeIncrementItemCart,
  delereCartItem,
} from '../../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, description, price, image, count }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{image}</p>
        <p>{count}</p>
        <Counter
          count={count}
          changeDecrement={() =>
            count === 1
              ? dispatch(delereCartItem(id))
              : dispatch(changeDecrementItemCart(id))
          }
          changeIncrement={() => dispatch(changeIncrementItemCart(id))}
        />
      </div>
    </li>
  );
};

export default CartItem;
