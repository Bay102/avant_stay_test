import { Home } from '../gql/graphql';
import { CardsSkeleton } from './CardSkeleton';
import HomeCount from './Count';
import { HomeCard } from './HomeCard';
import { useAppProvider } from './Providers/hookExports';
import { HomesContainer } from './Styles';

export const Homes = () => {
  const { loading, homes } = useAppProvider();
  return (
    <HomesContainer>
      <HomeCount />
      {loading && <CardsSkeleton />}
      {!loading &&
        homes?.map((home: Home) => <HomeCard home={home} key={home.id} />)}
    </HomesContainer>
  );
};
