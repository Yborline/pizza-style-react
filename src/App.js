import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
// import PizzaStyle from "./Pages/PizzaStyle/PizzaStyle ";
// import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
// import { Container } from '@mui/joy';
const PizzaStyle = lazy(() => import('./Pages/PizzaStyle/PizzaStyle '));
const Cart = lazy(() => import('./Pages/Cart/Cart'));

const App = () => {
  return (
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Navbar />
      <Container>
        <Routes>
          {/* <Route path="/" element={}></Route> */}
          <Route index element={<PizzaStyle />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </Container>
    </Suspense>
  );
};

export default App;
