import { createContext, useEffect, useState } from 'react';
import { AppContextTypes } from '../../types';
import { client } from '../../ApolloClient';
// import { DocumentNode } from 'graphql';
import { SearchHomes } from '../../queries';
import {
  Home,
  HomePriceDocument,
  HomePriceQuery,
  HomesOrder,
} from '../../gql/graphql';
import { useLocation, useNavigate } from 'react-router-dom';
import { ApolloQueryResult, DocumentNode } from '@apollo/client';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [homes, setHomes] = useState<Home[]>([]);
  const [count, setCount] = useState<number>(0);

  const [priceLoad, setPriceLoad] = useState<boolean>(false);

  const [homePrices, setHomePrices] =
    useState<ApolloQueryResult<HomePriceQuery>>();

  const location = useLocation();
  const navigate = useNavigate();

  function splitString(str: string) {
    return str.match(/.{1,10}/g);
  }

  const updateUrlParams = (
    key: string,
    value: string | null,
    e: React.ChangeEvent<HTMLSelectElement> | null
  ) => {
    const searchParams = new URLSearchParams(location.search);

    if (key === 'period') {
      searchParams.set(key, value as string);
    }
    if (key !== 'period') {
      searchParams.set(key, e?.target.value ?? '');
    }
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

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
    } catch (error) {
      console.error(error);
    }
  };

  const updateHomePrices = async (date: string) => {
    setPriceLoad(true);
    if (date) {
      const dates = splitString(date);
      const checkInDate = dates ? dates[0] : '';
      const checkOutDate = dates ? dates[1] : '';
      try {
        const homePrices = await client.query({
          query: HomePriceDocument,
          variables: {
            ids: homes.map((home) => home.id),
            period: { checkIn: checkInDate, checkOut: checkOutDate },
          },
        });

        homePrices.loading ? setPriceLoad(true) : setPriceLoad(false);

        setHomePrices(homePrices);
      } catch (error) {
        console.error('Error updating home prices: ', error);
      }
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(searchParams.entries());

    executeSearch(SearchHomes, {
      ...params,
      region: params.region ? params.region : undefined,
      period: params.period ? Number(params.period) : undefined,
      guests: params.guests ? Number(params.guests) : 0,
      order: params.order || HomesOrder.Relevance,
      page: params.page ? Number(params.page) : 1,
      pageSize: params.pageSize ? Number(params.pageSize) : 10,
    });

    if (params.period) {
      updateHomePrices(params.period);
    }
  }, [location]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(searchParams.entries());

    if (params.period) {
      updateHomePrices(params.period);
    }
  }, [homes]);

  return (
    <AppContext.Provider
      value={{
        loading,
        updateUrlParams,
        executeSearch,
        priceLoad,
        homes,
        setHomes,
        homePrices,
        setHomePrices,
        count,
        setCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
