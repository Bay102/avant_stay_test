import { HomeCard } from './HomeCard';
import { SearchBar } from './SearchBar/SearchBar';
import { HomesContainer, SearchContainer } from './Styles';
import { useAppProvider } from './Providers/hookExports';
import { CardsSkeleton } from './CardSkeleton';
import HomeCount from './Count';
import { Home } from '../gql/graphql';

export const SearchPage = () => {
  // const { loading, error, data } = useQuery(ALL_HOMES);
  const { loading, homes } = useAppProvider();

  return (
    <SearchContainer>
      <SearchBar />
      <HomesContainer>
        <HomeCount />
        {loading && <CardsSkeleton />}
        {!loading &&
          homes?.map((home: Home) => <HomeCard home={home} key={home.title} />)}
      </HomesContainer>
    </SearchContainer>
  );
};
