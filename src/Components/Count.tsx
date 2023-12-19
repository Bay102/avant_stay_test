import { Count, CountContainer, CountHeader, CountLine } from './Styles';
import { useAppProvider } from './Providers/hookExports';

const HomeCount = () => {
  const { loading, count } = useAppProvider();

  return (
    <CountContainer>
      <CountHeader>YOUR STAY IN ONE OF</CountHeader>
      <CountLine />
      <Count>{loading ? 'Loading homes' : `${count} homes`}</Count>
    </CountContainer>
  );
};

export default HomeCount;
