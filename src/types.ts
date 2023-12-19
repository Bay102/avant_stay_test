import { BookingPeriod, Home, HomePriceQuery } from './gql/graphql';
import { ApolloQueryResult } from '@apollo/client';

export type AppContextTypes = {
  loading: boolean;
  homes: Home[];
  setHomes: (homes: Home[]) => void;
  count: number;
  setCount: (count: number) => void;
  executeSearch: (
    variables: Record<string, string | number | boolean>
  ) => Promise<void>;
  updateUrlParams: (
    key: string,
    value: string | null,
    e: React.ChangeEvent<HTMLSelectElement> | null
  ) => void;
  homePrices: ApolloQueryResult<HomePriceQuery> | undefined;
  setHomePrices: (
    value: React.SetStateAction<ApolloQueryResult<HomePriceQuery> | undefined>
  ) => void;
  priceLoad: boolean;
  page: number;
  setPage: (value: React.SetStateAction<number>) => void;
};

export type PriceProps = {
  ids: string[];
  period: BookingPeriod;
  coupon?: string;
};
