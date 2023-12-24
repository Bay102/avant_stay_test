import InfiniteScroll from 'react-infinite-scroll-component';
import { Home } from '../gql/graphql';
import { LoadingCards } from './LoadingCards';
import HomeCount from './Count';
import { HomeCard } from './HomeCard';
import { NoResults } from './NoResults';
import { useAppProvider } from './Providers/hookExports';
import { HomesContainer } from './Styles';

export const Homes = () => {
  const { loading, homes, count, page, setPage } = useAppProvider();

  return (
    <HomesContainer>
      {loading && (
        <>
          <HomeCount />
          <LoadingCards />
        </>
      )}
      {count !== 0 ? <HomeCount /> : <NoResults />}
      <InfiniteScroll
        dataLength={homes.length}
        next={() => setPage(page + 1)}
        hasMore={homes?.length !== count}
        loader={<LoadingCards />}
        scrollThreshold={1.0}
      >
        {!loading &&
          homes?.map((home: Home) => <HomeCard home={home} key={home.id} />)}
      </InfiniteScroll>
    </HomesContainer>
  );
};
