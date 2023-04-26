export const getCart = state => state.shopping.cart;
export const getCountCart = state => {
  const array = state.shopping.cart.map(item => {
    const allNumberArray = +item.count;

    return allNumberArray;
  });
  const total = array.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);
  return total;
};
