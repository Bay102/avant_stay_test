import { Home } from '../gql/graphql';
import { CardsSkeleton } from './CardSkeleton';
import HomeCount from './Count';
import { HomeCard } from './HomeCard';
import { NoResults } from './NoResults';
import { useAppProvider } from './Providers/hookExports';
import { HomesContainer } from './Styles';

export const Homes = () => {
  const { loading, homes, count } = useAppProvider();

  return (
    <HomesContainer>
      {loading && <CardsSkeleton />}
      {count !== 0 ? <HomeCount /> : <NoResults />}
      {!loading &&
        homes?.map((home: Home) => <HomeCard home={home} key={home.id} />)}
    </HomesContainer>
  );
};
