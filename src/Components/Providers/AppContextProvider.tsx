import { createContext, useEffect, useState } from 'react';
import { AppContextTypes, UpdateUrlParamsType } from '../../types';
import { client } from '../../ApolloClient';
import { SearchHomes } from '../../queries';
import { ApolloQueryResult } from '@apollo/client';
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
  const [homePrices, setHomePrices] =
    useState<ApolloQueryResult<HomePriceQuery>>();
  const [priceLoad, setPriceLoad] = useState<boolean>(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  const executeSearch = async (
    variables: Record<string, string | number | boolean | undefined>
  ) => {
    setLoading(true);

    try {
      const result = await client.query({
        query: SearchHomes,
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

    executeSearch({
      region: params.region ? params.region : undefined,
      period: params.period ? Number(params.period) : undefined,
      guests: params.guests ? Number(params.guests) : 0,
      order: params.order || HomesOrder.Relevance,
      page: page,
      pageSize: 10,
    });
  }, [location, page]);

  const updateHomePrices = async (date: string) => {
    setPriceLoad(true);
    if (date) {
      const dates = date.match(/.{1,10}/g);
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
    if (params.period) updateHomePrices(params.period);
  }, [homes, location]);

  const updateUrlParams: UpdateUrlParamsType = (key, value, e) => {
    const searchParams = new URLSearchParams(location.search);
    if (key === 'period') {
      searchParams.set(key, value as string);
    } else {
      searchParams.set(key, e?.target.value ?? '');
    }
    setPage(1);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        priceLoad,
        updateUrlParams,
        executeSearch,
        homes,
        setHomes,
        homePrices,
        setHomePrices,
        selectedRegion,
        setSelectedRegion,
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
