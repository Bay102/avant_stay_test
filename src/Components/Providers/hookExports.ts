import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { useQuery } from '@apollo/client';
import {
  AllHomesDocument,
  AllRegionsDocument,
  HomePriceDocument,
  HomesByGuestsDocument,
  HomesDocument,
} from '../../gql/graphql';
import { PriceProps } from '../../types';

export const useAppProvider = () => useContext(AppContext);

export const useHomeSearch = (variables: any) =>
  useQuery(HomesDocument, { variables });

// export const useHomeSearch = () => useQuery(AllHomesDocument);
export const useHomesByGuest = () => useQuery(HomesByGuestsDocument);
export const useGetRegions = () => useQuery(AllRegionsDocument);

export const useHomePrice = (variables: PriceProps) =>
  useQuery(HomePriceDocument, { variables });
