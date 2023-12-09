/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ISODate: { input: any; output: any };
  UUID: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BookingPeriod = {
  checkIn: Scalars['ISODate']['input'];
  checkOut: Scalars['ISODate']['input'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Home = {
  __typename?: 'Home';
  amenities: Array<Maybe<Scalars['String']['output']>>;
  bathroomsCount: Scalars['Float']['output'];
  bedsCount: Scalars['Int']['output'];
  cityName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  hasPool: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  maxOccupancy: Scalars['Int']['output'];
  photos: Array<Maybe<HomePhoto>>;
  regionName: Scalars['String']['output'];
  roomsCount: Scalars['Int']['output'];
  seasonPricing: HomeSeasonPricing;
  stateCode: Scalars['String']['output'];
  stateName: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HomePhoto = {
  __typename?: 'HomePhoto';
  listOrder: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type HomePricing = {
  __typename?: 'HomePricing';
  homeId: Scalars['UUID']['output'];
  numberOfNights: Scalars['Int']['output'];
  total: Scalars['Float']['output'];
};

export type HomeSeasonPricing = {
  __typename?: 'HomeSeasonPricing';
  highSeason: PriceRange;
  lowSeason: PriceRange;
};

export enum HomesOrder {
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  Relevance = 'RELEVANCE',
}

export type PaginatedHomes = {
  __typename?: 'PaginatedHomes';
  count: Scalars['Int']['output'];
  results: Array<Maybe<Home>>;
};

export type PriceRange = {
  __typename?: 'PriceRange';
  maxPrice: Scalars['Float']['output'];
  minPrice: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  home?: Maybe<Home>;
  homes: PaginatedHomes;
  homesPricing: Array<Maybe<HomePricing>>;
  regions: Array<Maybe<Region>>;
};

export type QueryHomeArgs = {
  id: Scalars['UUID']['input'];
};

export type QueryHomesArgs = {
  guests?: Scalars['Int']['input'];
  order?: HomesOrder;
  page?: Scalars['Int']['input'];
  pageSize?: Scalars['Int']['input'];
  period?: InputMaybe<BookingPeriod>;
  region?: InputMaybe<Scalars['UUID']['input']>;
};

export type QueryHomesPricingArgs = {
  coupon?: InputMaybe<Scalars['String']['input']>;
  ids: Array<InputMaybe<Scalars['UUID']['input']>>;
  period: BookingPeriod;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  stateCode: Scalars['String']['output'];
  stateName: Scalars['String']['output'];
};

export type AppContextTypes = {};
