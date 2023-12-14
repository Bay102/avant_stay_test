import { gql } from '@apollo/client';

export const AllHomes = gql`
  query AllHomes {
    homes {
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

export const HomePrice = gql`
  query HomePrice($ids: [UUID]!, $period: BookingPeriod!, $coupon: String) {
    homesPricing(ids: $ids, period: $period, coupon: $coupon) {
      homeId
      numberOfNights
      total
    }
  }
`;

export const HomesByGuests = gql`
  query HomesByGuests($guests: Int!) {
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

export const SearchHomes = gql`
  query Homes(
    $region: UUID
    $period: BookingPeriod
    $guests: Int!
    $order: HomesOrder!
    $page: Int!
    $pageSize: Int!
  ) {
    homes(
      region: $region
      period: $period
      guests: $guests
      order: $order
      page: $page
      pageSize: $pageSize
    ) {
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
