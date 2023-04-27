import { Triangle } from 'react-loader-spinner';
import { Div } from './SpinnerLoader.styled';

const SpinnerLoader = ({ height }) => {
  return (
    <Div height={height}>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Div>
  );
};

export default SpinnerLoader;
