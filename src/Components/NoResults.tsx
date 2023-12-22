import {
  Illustration,
  NoRegionsBtn,
  NoResultsContainer,
  NoResultsText,
} from './Styles';

export const NoResults = () => {
  return (
    <NoResultsContainer>
      <Illustration src="/illustration.svg" alt="" />
      <NoResultsText>
        Oops! We haven't found anything matching your search.
      </NoResultsText>
      <NoResultsText>
        Try something else or reset the filters to see all region homes.
      </NoResultsText>
      <NoRegionsBtn>See all homes</NoRegionsBtn>
    </NoResultsContainer>
  );
};
