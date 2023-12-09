import { DocumentNode, useQuery } from '@apollo/client';
import { ALL_HOMES, client } from '../ApolloClient';
import { HomeCard } from './HomeCard';
import { SearchBar } from './SearchBar';
import { Home } from '../types';
import { useState } from 'react';
import { HomesContainer, SearchContainer } from './Styles';

export const SearchPage = () => {
  // const { loading, error, data } = useQuery(ALL_HOMES);

  const [homes, setHomes] = useState<Home[]>([]);

  //   , {
  //   variables: {
  //     guests: 30,
  //   },
  // });

  async function executeQuery(
    query: DocumentNode,
    variables: Record<string, number>
  ) {
    try {
      const result = await client.query({
        query: query,
        variables: variables,
      });

      setHomes(result.data.homes.results);

      console.log(result);

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  executeQuery(ALL_HOMES, { guests: 16 });

  // if (loading) return <p>Loading...</p>;

  // if (error) return <p>{`${error.message}`}</p>;

  return (
    <SearchContainer>
      <SearchBar />
      <HomesContainer>
        {homes?.map((home: Home) => (
          <HomeCard home={home} key={home.title} />
        ))}
      </HomesContainer>
    </SearchContainer>
  );
};

// import { useEffect, useRef, useState } from 'react';
// import { HomeCard } from './HomeCard';
// import { SearchBar } from './SearchBar';
// import { Home } from '../types';

// export const SearchPage = () => {
//   const [homes, setHomes] = useState<Home[]>([]);
//   const [offset, setOffset] = useState(0);
//   const limit = 10;
//   const observer = useRef<IntersectionObserver>();
//   const lastHomeElementRef = useRef<HTMLDivElement>(null);

//   async function executeQuery(
//     query: DocumentNode,
//     variables: Record<string, number>
//   ) {
//     try {
//       const result = await client.query({
//         query: query,
//         variables: variables,
//       });

//       setHomes((prevHomes) => [...prevHomes, ...result.data.homes.results]);

//       return result;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setOffset((prevOffset) => prevOffset + limit);
//         }
//       },
//       { threshold: 1 }
//     );

//     if (lastHomeElementRef.current) {
//       observer.current.observe(lastHomeElementRef.current);
//     }

//     return () => {
//       observer.current?.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     executeQuery(ALL_HOMES, { guests: 3, limit: limit, offset: offset });
//   }, [offset]);

//   return (
//     <div>
//       <SearchBar />
//       {homes?.map((home: Home, index: number) => (
//         <div ref={index === homes.length - 1 ? lastHomeElementRef : null}>
//           <HomeCard home={home} key={home.title} />
//         </div>
//       ))}
//     </div>
//   );
// };
