import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { useQuery } from '@apollo/client';
import { AllRegionsDocument, HomePriceDocument } from '../../gql/graphql';
import { PriceProps } from '../../types';

export const useAppProvider = () => useContext(AppContext);

export const useGetRegions = () => useQuery(AllRegionsDocument);

export const useHomePrice = (variables: PriceProps) =>
  useQuery(HomePriceDocument, { variables });
