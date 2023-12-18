import { useContext } from 'react';
import { AppContext } from './AppContextProvider';
import { useQuery } from '@apollo/client';
import { AllRegionsDocument } from '../../gql/graphql';

export const useAppProvider = () => useContext(AppContext);

export const useGetRegions = () => useQuery(AllRegionsDocument);
