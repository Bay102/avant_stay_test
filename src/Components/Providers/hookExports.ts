import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { useQuery } from '@apollo/client';
import {
  AllRegionsDocument,
  HomesDocument,
  HomesQueryVariables,
} from '../../gql/graphql';

export const useAppProvider = () => useContext(AppContext);

export const useGetRegions = () => useQuery(AllRegionsDocument);

export const useHomeSearch = ({
  region,
  period,
  guests,
  order,
  pageSize,
  page,
}: HomesQueryVariables) =>
  useQuery(HomesDocument, {
    variables: { region, period, guests, order, pageSize, page },
  });
