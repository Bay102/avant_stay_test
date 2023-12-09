import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://fake-api.avantstay.dev/graphql',
  cache: new InMemoryCache(),
});

export const ALL_HOMES = gql`
  query ALL_HOMES($guests: Int!) {
    homes(guests: $guests) {
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
