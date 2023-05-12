import { Ul, Link, SpanCartNumber, Container } from './Navbar.styled';
import { useSelector } from 'react-redux';
import { getCountCart } from '../../redux/cart/cart-selector';

function Navbar() {
  const count = useSelector(getCountCart);

  return (
    <Container>
      <Ul>
        <li>
          <Link to="/" end>
            PizzaStyle
          </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart
            {count === 0 ? null : <SpanCartNumber>{count}</SpanCartNumber>}
          </Link>
        </li>
      </Ul>
    </Container>
  );
}

export default Navbar;
