import { DocumentNode } from 'graphql';
import { BookingPeriod, Home } from './gql/graphql';
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
};

export type PriceProps = {
  ids: string[];
  period: BookingPeriod;
  coupon?: string;
};
