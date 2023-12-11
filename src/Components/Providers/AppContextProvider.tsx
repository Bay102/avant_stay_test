import { createContext, useEffect, useState } from 'react';
import { AppContextTypes, Home } from '../../types';
import { client } from '../../ApolloClient';
import { DocumentNode } from 'graphql';
import { AllHomes } from '../../queries';

export const AppContext = createContext({} as AppContextTypes);

export const AppContextProvider = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [homes, setHomes] = useState<Home[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    executeQuery(AllHomes, {});
  }, []);

  const executeQuery = async (
    query: DocumentNode,
    variables: Record<string, string | number | boolean>
  ) => {
    setLoading(true);

    try {
      const result = await client.query({
        query: query,
        variables: variables,
      });

      setHomes(result.data.homes.results);
      setCount(result.data.homes.results.length);
      setLoading(false);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppContext.Provider value={{ loading, homes, setHomes, count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};
