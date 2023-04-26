import { Img, Li, DivInfo } from './PizzaItem.styled';
import {
  addItemCart,
  changeDecrementItemCart,
  changeIncrementItemCart,
  delereCartItem,
} from '../../../redux/cart/cart-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../redux/cart/cart-selector';
import Counter from '../../Counter/Counter';
import Button from '@mui/joy/Button';

const PizzaItem = ({ id, title, description, price, image, buy, count }) => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const item = { id, title, description, price, image };

  const handleClick = () => {
    dispatch(addItemCart(item));
  };

  return (
    <Li>
      <Img src={image} alt={title}></Img>
      <DivInfo>
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{description}</p>
        {buy ? (
          <Counter
            count={count}
            changeDecrement={() =>
              count === 1
                ? dispatch(delereCartItem(id))
                : dispatch(changeDecrementItemCart(id))
            }
            changeIncrement={() => dispatch(changeIncrementItemCart(id))}
          />
        ) : (
          <Button onClick={handleClick}>Add to cart</Button>
        )}
        {/* <button onClick={handleClick}>Add to cart</button> */}
      </DivInfo>
    </Li>
  );
};

export default PizzaItem;
