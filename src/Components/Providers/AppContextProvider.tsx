/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { AppContextTypes } from '../../types';
import { client } from '../../ApolloClient';
import { DocumentNode } from 'graphql';
import { AllHomes, SearchHomes } from '../../queries';
import { Home, HomesOrder, Region } from '../../gql/graphql';
// import { useLocation, useNavigate } from 'react-router-dom';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [homes, setHomes] = useState<Home[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selectedRegion, setSelectedRegion] = useState<Region>();

  // const navigate = useNavigate();

  // const setQueryString = () => {
  //   const searchParams = new URLSearchParams(location.search);
  //   searchParams.set('param1', 'value1');
  //   searchParams.set('param2', 'value2');
  //   navigate({ ...location, search: searchParams.toString() });
  // };

  const executeSearch = async (
    query: DocumentNode,
    variables: Record<string, string | number | boolean | undefined>
  ) => {
    setLoading(true);
    try {
      const result = await client.query({
        query: query,
        variables: variables,
      });

      setHomes(result.data.homes.results);
      setCount(result.data.homes.results.length);
      setLoading(false);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // executeSearch(AllHomes, {});
    executeSearch(SearchHomes, {
      region: undefined,
      period: undefined,
      guests: 10,
      order: HomesOrder.Relevance,
      page: 1,
      pageSize: 100,
    });
  }, []);

  // const searchByGuests = async (guests: number) => {
  //   executeQuery(HomesByGuests, {guests: guests})
  // }

  return (
    <AppContext.Provider
      value={{
        loading,
        executeSearch,
        homes,
        setHomes,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
