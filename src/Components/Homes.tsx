import InfiniteScroll from 'react-infinite-scroll-component';
import { Home } from '../gql/graphql';
import { CardsSkeleton } from './CardSkeleton';
import HomeCount from './Count';
import { HomeCard } from './HomeCard';
import { NoResults } from './NoResults';
import { useAppProvider } from './Providers/hookExports';
import { HomesContainer } from './Styles';

export const Homes = () => {
  const { loading, homes, count, page, setPage } = useAppProvider();

  return (
    <HomesContainer>
      {loading && <CardsSkeleton />}
      {count !== 0 ? <HomeCount /> : <NoResults />}
      <InfiniteScroll
        dataLength={homes.length}
        next={() => setPage(page + 1)}
        hasMore={homes.length === count ? false : true}
        loader={<CardsSkeleton />}
      >
        {!loading &&
          homes?.map((home: Home) => <HomeCard home={home} key={home.id} />)}
      </InfiniteScroll>
    </HomesContainer>
  );
};
