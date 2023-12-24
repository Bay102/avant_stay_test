import { HomeSeasonPricing } from '../gql/graphql';
import { useAppProvider } from './Providers/hookExports';
import {
  PerNight,
  PriceBox,
  PriceContainer,
  PriceText,
  TotalPrice,
} from './Styles';

interface HomePriceProps {
  totalPrice: number | null;
  nights: number | null;
  seasonPrice: HomeSeasonPricing;
}

export const HomePrice: React.FC<HomePriceProps> = ({
  totalPrice,
  nights,
  seasonPrice,
}) => {
  const { loading } = useAppProvider();

  const addComma = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <PriceContainer>
      {!loading && !totalPrice && (
        <>
          <PriceBox>
            <PriceText>
              <img src="/low.svg" alt="" />
              Budget Season
            </PriceText>
            ${seasonPrice.lowSeason.minPrice} - {seasonPrice.lowSeason.maxPrice}
            <PriceText>per night</PriceText>
          </PriceBox>
          <PriceBox>
            <PriceText>
              {' '}
              <img src="/high.svg" alt="" />
              Prime Season
            </PriceText>
            ${seasonPrice.highSeason.minPrice} -{' '}
            {seasonPrice.highSeason.maxPrice}
            <PriceText>per night</PriceText>
          </PriceBox>
        </>
      )}
      {totalPrice && (
        <PriceBox>
          <PriceText>Total | {nights} nights</PriceText>
          <TotalPrice>{`$${addComma(totalPrice)}`}</TotalPrice>
          <PerNight>{`$${Math.round(
            totalPrice / (nights ?? 1)
          )} per night`}</PerNight>
        </PriceBox>
      )}
    </PriceContainer>
  );
};
