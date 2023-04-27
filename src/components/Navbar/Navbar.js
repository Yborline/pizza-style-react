import { Ul, Link, SpanCartNumber } from './Navbar.styled';
import { useSelector } from 'react-redux';
import { getCountCart } from '../../redux/cart/cart-selector';

function Navbar() {
  const count = useSelector(getCountCart);

  return (
    <div>
      <Ul>
        <li>
          <Link to="/" end>
            PizzaStyle
          </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart
            {count === 0 ? <></> : <SpanCartNumber>{count}</SpanCartNumber>}
          </Link>
        </li>
      </Ul>
    </div>
  );
}

export default Navbar;
