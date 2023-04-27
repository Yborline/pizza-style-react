import Counter from '../../Counter/Counter';
import {
  changeDecrementItemCart,
  changeIncrementItemCart,
  deleteCartItem,
} from '../../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';
import { Img, Li, DivImg, PTitle, PPrice, DivInfo } from './CartItem.styled';
import { AiFillDelete } from 'react-icons/ai';
import s from './CartItem.module.css';

const CartItem = ({ id, title, description, price, image, count }) => {
  const dispatch = useDispatch();
  return (
    <Li>
      <DivImg>
        <Img src={image} alt={title} />
        <Counter
          count={count}
          changeDecrement={() =>
            count === 1
              ? dispatch(deleteCartItem(id))
              : dispatch(changeDecrementItemCart(id))
          }
          changeIncrement={() => dispatch(changeIncrementItemCart(id))}
        />
      </DivImg>

      <DivInfo>
        <PTitle>{title}</PTitle>
        <p>{description}</p>

        <AiFillDelete
          className={s.delete}
          onClick={() => dispatch(deleteCartItem(id))}
          size="20px"
          color="#808080"
        ></AiFillDelete>
        <PPrice>{price * count} UAH</PPrice>
      </DivInfo>
    </Li>
  );
};

export default CartItem;
