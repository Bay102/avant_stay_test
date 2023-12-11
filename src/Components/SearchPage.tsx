import { HomeCard } from './HomeCard';
import { SearchBar } from './SearchBar';
import { Home } from '../types';
import {
  Count,
  CountContainer,
  CountHeader,
  CountLine,
  HomesContainer,
  SearchContainer,
} from './Styles';
import { useAppProvider } from './Providers/providerExports';
import { CardSkeleton } from './CardSkeleton';

export const SearchPage = () => {
  // const { loading, error, data } = useQuery(ALL_HOMES);
  const { loading, homes, count } = useAppProvider();

  return (
    <SearchContainer>
      <SearchBar />
      <HomesContainer>
        <CountContainer>
          <CountHeader>YOUR STAY IN ONE OF</CountHeader>
          <CountLine />
          <Count>{loading ? 'Loading' : `${count} homes`}</Count>
        </CountContainer>
        {loading && <CardSkeleton />}
        {!loading &&
          homes?.map((home: Home) => <HomeCard home={home} key={home.title} />)}
      </HomesContainer>
    </SearchContainer>
  );
};
