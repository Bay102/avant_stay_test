import { gql } from '@apollo/client';

export const HomesByGuests = gql`
  query AllHomes($guests: Int!) {
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

export const AllRegions = gql`
  query AllRegions {
    regions {
      id
      name
      stateName
      stateCode
    }
  }
`;

export const HOMES_BY_REGION = gql`
  query HOMES_BY_REGION($regionName: String!) {
    homes(regionName: $regionName) {
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
