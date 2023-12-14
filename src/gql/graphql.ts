/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ISODate: { input: any; output: any; }
  UUID: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type BookingPeriod = {
  checkIn: Scalars['ISODate']['input'];
  checkOut: Scalars['ISODate']['input'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
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
  Relevance = 'RELEVANCE'
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

export type AllHomesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllHomesQuery = { __typename?: 'Query', homes: { __typename?: 'PaginatedHomes', count: number, results: Array<{ __typename?: 'Home', id: any, title: string, description: string, roomsCount: number, bathroomsCount: number, bedsCount: number, maxOccupancy: number, hasPool: boolean, amenities: Array<string | null>, regionName: string, cityName: string, stateName: string, stateCode: string, photos: Array<{ __typename?: 'HomePhoto', listOrder: number, url: string } | null>, seasonPricing: { __typename?: 'HomeSeasonPricing', highSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number }, lowSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number } } } | null> } };

export type HomePriceQueryVariables = Exact<{
  ids: Array<InputMaybe<Scalars['UUID']['input']>> | InputMaybe<Scalars['UUID']['input']>;
  period: BookingPeriod;
  coupon?: InputMaybe<Scalars['String']['input']>;
}>;


export type HomePriceQuery = { __typename?: 'Query', homesPricing: Array<{ __typename?: 'HomePricing', homeId: any, numberOfNights: number, total: number } | null> };

export type HomesByGuestsQueryVariables = Exact<{
  guests: Scalars['Int']['input'];
}>;


export type HomesByGuestsQuery = { __typename?: 'Query', homes: { __typename?: 'PaginatedHomes', count: number, results: Array<{ __typename?: 'Home', id: any, title: string, description: string, roomsCount: number, bathroomsCount: number, bedsCount: number, maxOccupancy: number, hasPool: boolean, amenities: Array<string | null>, regionName: string, cityName: string, stateName: string, stateCode: string, photos: Array<{ __typename?: 'HomePhoto', listOrder: number, url: string } | null>, seasonPricing: { __typename?: 'HomeSeasonPricing', highSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number }, lowSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number } } } | null> } };

export type AllRegionsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRegionsQuery = { __typename?: 'Query', regions: Array<{ __typename?: 'Region', id: any, name: string, stateName: string, stateCode: string } | null> };

export type HomesQueryVariables = Exact<{
  region?: InputMaybe<Scalars['UUID']['input']>;
  period?: InputMaybe<BookingPeriod>;
  guests?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<HomesOrder>;
  page: Scalars['Int']['input'];
  pageSize: Scalars['Int']['input'];
}>;


export type HomesQuery = { __typename?: 'Query', homes: { __typename?: 'PaginatedHomes', count: number, results: Array<{ __typename?: 'Home', id: any, title: string, description: string, roomsCount: number, bathroomsCount: number, bedsCount: number, maxOccupancy: number, hasPool: boolean, amenities: Array<string | null>, regionName: string, cityName: string, stateName: string, stateCode: string, photos: Array<{ __typename?: 'HomePhoto', listOrder: number, url: string } | null>, seasonPricing: { __typename?: 'HomeSeasonPricing', highSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number }, lowSeason: { __typename?: 'PriceRange', minPrice: number, maxPrice: number } } } | null> } };


export const AllHomesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllHomes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listOrder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bathroomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxOccupancy"}},{"kind":"Field","name":{"kind":"Name","value":"hasPool"}},{"kind":"Field","name":{"kind":"Name","value":"amenities"}},{"kind":"Field","name":{"kind":"Name","value":"seasonPricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lowSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"regionName"}},{"kind":"Field","name":{"kind":"Name","value":"cityName"}},{"kind":"Field","name":{"kind":"Name","value":"stateName"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}}]}}]}}]}}]} as unknown as DocumentNode<AllHomesQuery, AllHomesQueryVariables>;
export const HomePriceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePrice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookingPeriod"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"coupon"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homesPricing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"period"},"value":{"kind":"Variable","name":{"kind":"Name","value":"period"}}},{"kind":"Argument","name":{"kind":"Name","value":"coupon"},"value":{"kind":"Variable","name":{"kind":"Name","value":"coupon"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homeId"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfNights"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<HomePriceQuery, HomePriceQueryVariables>;
export const HomesByGuestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomesByGuests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guests"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"guests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guests"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listOrder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bathroomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxOccupancy"}},{"kind":"Field","name":{"kind":"Name","value":"hasPool"}},{"kind":"Field","name":{"kind":"Name","value":"amenities"}},{"kind":"Field","name":{"kind":"Name","value":"seasonPricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lowSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"regionName"}},{"kind":"Field","name":{"kind":"Name","value":"cityName"}},{"kind":"Field","name":{"kind":"Name","value":"stateName"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}}]}}]}}]}}]} as unknown as DocumentNode<HomesByGuestsQuery, HomesByGuestsQueryVariables>;
export const AllRegionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllRegions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"regions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"stateName"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}}]}}]}}]} as unknown as DocumentNode<AllRegionsQuery, AllRegionsQueryVariables>;
export const HomesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Homes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"region"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"period"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BookingPeriod"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guests"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HomesOrder"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"guests"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guests"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"photos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listOrder"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bathroomsCount"}},{"kind":"Field","name":{"kind":"Name","value":"bedsCount"}},{"kind":"Field","name":{"kind":"Name","value":"maxOccupancy"}},{"kind":"Field","name":{"kind":"Name","value":"hasPool"}},{"kind":"Field","name":{"kind":"Name","value":"amenities"}},{"kind":"Field","name":{"kind":"Name","value":"seasonPricing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"highSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lowSeason"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"minPrice"}},{"kind":"Field","name":{"kind":"Name","value":"maxPrice"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"regionName"}},{"kind":"Field","name":{"kind":"Name","value":"cityName"}},{"kind":"Field","name":{"kind":"Name","value":"stateName"}},{"kind":"Field","name":{"kind":"Name","value":"stateCode"}}]}}]}}]}}]} as unknown as DocumentNode<HomesQuery, HomesQueryVariables>;