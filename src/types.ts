import { DocumentNode } from 'graphql';
import { BookingPeriod, Home, HomePriceQuery } from './gql/graphql';
import { ApolloQueryResult } from '@apollo/client';
/* eslint-disable @typescript-eslint/no-explicit-any */

export type AppContextTypes = {
  loading: boolean;
  homes: Home[];
  setHomes: (homes: Home[]) => void;
  count: number;
  setCount: (count: number) => void;
  executeSearch: (
    query: DocumentNode,
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
};

export type PriceProps = {
  ids: string[];
  period: BookingPeriod;
  coupon?: string;
};
