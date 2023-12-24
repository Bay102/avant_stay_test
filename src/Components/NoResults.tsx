import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAppProvider } from './Providers/hookExports';
import {
  Illustration,
  NoRegionsBtn,
  NoResultsContainer,
  NoResultsText,
} from './Styles';

export const NoResults = () => {
  const { count, setSelectedRegion } = useAppProvider();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const allRegions = () => {
    if (count === 0) {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      newSearchParams.delete('region');
      setSelectedRegion('All Regions');
      navigate(`/homes?${newSearchParams.toString()}`);
    }
  };

  return (
    <NoResultsContainer>
      <Illustration src="/illustration.svg" alt="" />
      <NoResultsText>
        Oops! We haven't found anything matching your search.
      </NoResultsText>
      <NoResultsText>
        Try something else or reset the filters to see all region homes.
      </NoResultsText>
      <NoRegionsBtn onClick={() => allRegions()}>See all homes</NoRegionsBtn>
    </NoResultsContainer>
  );
};
