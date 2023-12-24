import { BookingPeriod, Home, HomePriceQuery } from './gql/graphql';
import { ApolloQueryResult } from '@apollo/client';

export type AppContextTypes = {
  loading: boolean;
  homes: Home[];
  setHomes: (homes: Home[]) => void;
  count: number;
  setCount: (count: number) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  executeSearch: (
    variables: Record<string, string | number | boolean>
  ) => Promise<void>;
  updateUrlParams: UpdateUrlParamsType;
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

export type UpdateUrlParamsType = (
  key: string,
  value?: string | number | null,
  e?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | null
) => void;
