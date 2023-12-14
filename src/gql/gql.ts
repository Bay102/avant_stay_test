/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AllHomes {\n    homes {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n": types.AllHomesDocument,
    "\n  query HomePrice($ids: [UUID]!, $period: BookingPeriod!, $coupon: String) {\n    homesPricing(ids: $ids, period: $period, coupon: $coupon) {\n      homeId\n      numberOfNights\n      total\n    }\n  }\n": types.HomePriceDocument,
    "\n  query HomesByGuests($guests: Int!) {\n    homes(guests: $guests) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n": types.HomesByGuestsDocument,
    "\n  query AllRegions {\n    regions {\n      id\n      name\n      stateName\n      stateCode\n    }\n  }\n": types.AllRegionsDocument,
    "\n  query Homes(\n    $region: UUID\n    $period: BookingPeriod\n    $guests: Int\n    $order: HomesOrder\n    $page: Int!\n    $pageSize: Int!\n  ) {\n    homes(guests: $guests, order: $order, page: $page, pageSize: $pageSize) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n": types.HomesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllHomes {\n    homes {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllHomes {\n    homes {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePrice($ids: [UUID]!, $period: BookingPeriod!, $coupon: String) {\n    homesPricing(ids: $ids, period: $period, coupon: $coupon) {\n      homeId\n      numberOfNights\n      total\n    }\n  }\n"): (typeof documents)["\n  query HomePrice($ids: [UUID]!, $period: BookingPeriod!, $coupon: String) {\n    homesPricing(ids: $ids, period: $period, coupon: $coupon) {\n      homeId\n      numberOfNights\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomesByGuests($guests: Int!) {\n    homes(guests: $guests) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomesByGuests($guests: Int!) {\n    homes(guests: $guests) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllRegions {\n    regions {\n      id\n      name\n      stateName\n      stateCode\n    }\n  }\n"): (typeof documents)["\n  query AllRegions {\n    regions {\n      id\n      name\n      stateName\n      stateCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Homes(\n    $region: UUID\n    $period: BookingPeriod\n    $guests: Int\n    $order: HomesOrder\n    $page: Int!\n    $pageSize: Int!\n  ) {\n    homes(guests: $guests, order: $order, page: $page, pageSize: $pageSize) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"): (typeof documents)["\n  query Homes(\n    $region: UUID\n    $period: BookingPeriod\n    $guests: Int\n    $order: HomesOrder\n    $page: Int!\n    $pageSize: Int!\n  ) {\n    homes(guests: $guests, order: $order, page: $page, pageSize: $pageSize) {\n      count\n      results {\n        id\n        title\n        description\n        photos {\n          listOrder\n          url\n        }\n        roomsCount\n        bathroomsCount\n        bedsCount\n        maxOccupancy\n        hasPool\n        amenities\n        seasonPricing {\n          highSeason {\n            minPrice\n            maxPrice\n          }\n          lowSeason {\n            minPrice\n            maxPrice\n          }\n        }\n        regionName\n        cityName\n        stateName\n        stateCode\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;