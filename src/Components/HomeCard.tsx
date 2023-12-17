import { useEffect, useState } from 'react';
import { Home } from '../gql/graphql';
import { HomePrice } from './HomePrice';

import {
  Attribute,
  AttributeIcon,
  Attributes,
  Card,
  Image,
  Info,
  Location,
  Name,
} from './Styles';
import { useAppProvider } from './Providers/hookExports';
import { PriceSkeleton } from './CardSkeleton';

export const HomeCard = ({ home }: { home: Home }) => {
  const { priceLoad, homePrices } = useAppProvider();
  const [price, setPrice] = useState<number | null>(null);
  const [nights, setNights] = useState<number | null>(null);

  useEffect(() => {
    if (homePrices) {
      console.log(homePrices);

      const findHomePrice = () => {
        const homePrice = homePrices?.data.homesPricing.find(
          (price) => price?.homeId === home.id
        );

        setPrice(homePrice?.total as number);
        setNights(homePrice?.numberOfNights as number);
      };

      findHomePrice();
    }
  }, [homePrices]);

  return (
    <Card>
      <Image src={home.photos[0]?.url} alt={home.title} />
      <Info>
        <Location>
          {home.regionName} | {home.cityName}
        </Location>
        <Name>{home.title}</Name>
        <Attributes>
          <Attribute>
            <AttributeIcon src="/rooms.svg" />
            {home.bedsCount} Beds
          </Attribute>
          <Attribute>
            <AttributeIcon src="/bath.svg" />
            {home.bathroomsCount} Baths
          </Attribute>
          {home.hasPool ? (
            <Attribute>
              {' '}
              <AttributeIcon src="/pool.svg" />
              Pool
            </Attribute>
          ) : null}
          <Attribute>
            <AttributeIcon src="/user.svg" />
            {home.maxOccupancy} Guests
          </Attribute>
        </Attributes>
        {priceLoad && <PriceSkeleton />}
        {!priceLoad && (
          <HomePrice
            totalPrice={price}
            nights={nights}
            seasonPrice={home.seasonPricing}
          />
        )}
      </Info>
    </Card>
  );
};
