import { useSelector } from 'react-redux';
import { products } from '../../info/products';
import PizzaItem from './PizzaItem/PizzaItem';
import { Ul } from './PizzaList.styled';
import { getCart } from '../../redux/cart/cart-selector';

const PizzaList = () => {
  const cart = useSelector(getCart);

  return (
    <Ul>
      {products && 
        products.map(({ id, title, description, price, image }) => {
          const reapet = cart.find(itemCart => itemCart.id === id);
          if (reapet) {
            return (
              <PizzaItem
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
                buy={true}
                count={reapet.count}
              />
            );
          } else {
            return (
              <PizzaItem
                key={id}
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
                buy={false}
              />
            );
          }
        })}
    </Ul>
  );
};

export default PizzaList;
