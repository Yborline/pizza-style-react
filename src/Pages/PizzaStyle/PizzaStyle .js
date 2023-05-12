import PizzaList from '../../components/PizzaList/PizzaList';
import ButtonUp from '../../components/ButtonUp/ButtonUp';
import { H1, Container } from './PizzaStyle .styled';

const PizzaStyle = () => {
  return (
    <Container>
      <H1>Pizza-style</H1>
      <PizzaList />
      <ButtonUp />
    </Container>
  );
};

export default PizzaStyle;
