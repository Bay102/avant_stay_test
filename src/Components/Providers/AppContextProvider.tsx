/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from 'react';
import { AppContextTypes } from '../../types';
import { client } from '../../ApolloClient';
import { DocumentNode } from 'graphql';
import { AllHomes, SearchHomes } from '../../queries';
import { Home, HomesOrder, Region } from '../../gql/graphql';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [homes, setHomes] = useState<Home[]>([]);
  const [count, setCount] = useState<number>(0);

  const location = useLocation();
  const navigate = useNavigate();

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

  const updateUrlParams = (
    key: string,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, e.target.value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(searchParams.entries());

    console.log(params.guests);

    executeSearch(SearchHomes, {
      ...params,
      region: params.region ? params.region : undefined,
      period: params.period ? Number(params.period) : undefined,
      guests: params.guests ? Number(params.guests) : undefined,
      order: params.order || HomesOrder.Relevance,
      page: params.page ? Number(params.page) : 1,
      pageSize: params.pageSize ? Number(params.pageSize) : 100,
    });
  }, [location]);

  // useEffect(() => {
  //   // executeSearch(AllHomes, {});
  //   executeSearch(SearchHomes, {
  //     region: undefined,
  //     period: undefined,
  //     guests: 10,
  //     order: HomesOrder.Relevance,
  //     page: 1,
  //     pageSize: 100,
  //   });
  // }, []);

  // const searchByGuests = async (guests: number) => {
  //   executeQuery(HomesByGuests, {guests: guests})
  // }

  return (
    <AppContext.Provider
      value={{
        loading,
        updateUrlParams,
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
