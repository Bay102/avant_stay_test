import { useQuery } from '@apollo/client';
import { ALLHOMES } from '../ApolloClient';

export const Search = () => {
  const { loading, error, data } = useQuery(ALLHOMES);

  console.log(data);

  return <div></div>;
};
