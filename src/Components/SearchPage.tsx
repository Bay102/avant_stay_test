import { SearchBar } from './SearchBar/SearchBar';
import { SearchContainer } from './Styles';
import { Homes } from './Homes';

export const SearchPage = () => {
  return (
    <SearchContainer>
      <SearchBar />
      <Homes />
    </SearchContainer>
  );
};
