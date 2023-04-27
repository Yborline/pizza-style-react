import {
  Img,
  Li,
  DivInfo,
  DivPhoto,
  DivText,
  PPrice,
  DivLoader,
} from './PizzaItem.styled';
import {
  addItemCart,
  changeDecrementItemCart,
  changeIncrementItemCart,
  deleteCartItem,
} from '../../../redux/cart/cart-actions';
import { useDispatch } from 'react-redux';

import Counter from '../../Counter/Counter';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import SpinnerLoader from '../../SpinnerLoader/SpinnerLoader';

const PizzaItem = ({ id, title, description, price, image, buy, count }) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const item = { id, title, description, price, image };

  const onLoad = () => {
    setLoaded(true);
  };

  const handleClick = () => {
    dispatch(addItemCart(item));
  };

  return (
    <Li>
      <DivPhoto>
        <Img onLoad={onLoad} src={image} alt={title}></Img>
        {!loaded && (
          <DivLoader>
            <SpinnerLoader height="280px" />
          </DivLoader>
        )}
      </DivPhoto>
      <DivInfo>
        <DivText>
          <h3>{title}</h3>
          <PPrice>{price} UAH</PPrice>
          <p>{description}</p>
        </DivText>
        {buy ? (
          <Counter
            count={count}
            changeDecrement={() =>
              count === 1
                ? dispatch(deleteCartItem(id))
                : dispatch(changeDecrementItemCart(id))
            }
            changeIncrement={() => dispatch(changeIncrementItemCart(id))}
          />
        ) : (
          <Button size="sm" onClick={handleClick}>
            Add to cart
          </Button>
        )}
        {/* <button onClick={handleClick}>Add to cart</button> */}
      </DivInfo>
    </Li>
  );
};

export default PizzaItem;
