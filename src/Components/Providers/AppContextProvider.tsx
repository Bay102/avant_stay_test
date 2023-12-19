import { createContext, useEffect, useState } from 'react';
import { AppContextTypes } from '../../types';
import { client } from '../../ApolloClient';
import { SearchHomes } from '../../queries';
import { ApolloQueryResult, DocumentNode } from '@apollo/client';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  HomePriceDocument,
  HomePriceQuery,
  HomesOrder,
} from '../../gql/graphql';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [homes, setHomes] = useState<Home[]>([]);
  const [priceLoad, setPriceLoad] = useState<boolean>(false);
  const [homePrices, setHomePrices] =
    useState<ApolloQueryResult<HomePriceQuery>>();
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  function splitString(str: string) {
    return str.match(/.{1,10}/g);
  }

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
        setHomePrices(homePrices);
        homePrices.loading ? setPriceLoad(true) : setPriceLoad(false);
      } catch (error) {
        console.error('Error updating home prices: ', error);
      }
    }
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

      if (page > 1) {
        setHomes((prevHomes) => [...prevHomes, ...result.data.homes.results]);
      } else {
        setHomes(result.data.homes.results);
      }

      setCount(result.data.homes.count);
      setLoading(false);
    } catch (error) {
      console.error(error);
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
      page: page,
      pageSize: 10,
    });
  }, [location, page]);

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
    setPage(1);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(searchParams.entries());

    if (params.period) {
      updateHomePrices(params.period);
    }
  }, [homes, location]);

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
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
