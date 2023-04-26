import { NavLink, Outlet } from 'react-router-dom';
import { Ul, Link } from './Navbar.styled';
import { useSelector } from 'react-redux';
import { getCountCart } from '../../redux/cart/cart-selector';

function Navbar() {
  const count = useSelector(getCountCart);

  //   const total = count.reduce((previousValue, number) => {
  //     return previousValue + number;
  //   }, 0);
  console.log(count);
  return (
    <div>
      <Ul>
        <li>
          <Link to="/" end>
            PizzaStyle
          </Link>
        </li>
        <li>
          <Link to="/cart">Cart({count})</Link>
        </li>
      </Ul>
      <Outlet />
    </div>
  );
}

export default Navbar;
