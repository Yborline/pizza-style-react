import { AiOutlinePlus } from 'react-icons/ai';
import { BiMinus } from 'react-icons/bi';
import { Button, Div, Span } from './Counter.styled';

const Counter = ({ changeDecrement, changeIncrement, count }) => {
  return (
    <Div>
      <Button name="decrement" onClick={changeDecrement}>
        <BiMinus />
      </Button>

      <Span>{count}</Span>

      <Button name="increment" onClick={changeIncrement}>
        <AiOutlinePlus />
      </Button>
    </Div>
  );
};

export default Counter;
