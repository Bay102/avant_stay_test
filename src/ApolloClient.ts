import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://fake-api.avantstay.dev/graphql',
  cache: new InMemoryCache(),
});

export const ALLHOMES = gql`
  query {
    homes(guests: 10) {
      count
      results {
        id
        title
        description
        photos {
          listOrder
          url
        }
        roomsCount
        bathroomsCount
        bedsCount
        maxOccupancy
        hasPool
        amenities
        seasonPricing {
          highSeason {
            minPrice
            maxPrice
          }
          lowSeason {
            minPrice
            maxPrice
          }
        }
        regionName
        cityName
        stateName
        stateCode
      }
    }
  }
`;
