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
  seasonPricing: HomeSeasonPricing;
}

export const HomePrice: React.FC<HomePriceProps> = ({
  totalPrice,
  nights,
  seasonPricing,
}) => {
  const { loading } = useAppProvider();
  const addComma = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const lowSeasonMin = seasonPricing?.lowSeason?.minPrice;
  const lowSeasonMax = addComma(seasonPricing?.lowSeason?.maxPrice);
  const highSeasonMin = addComma(seasonPricing?.highSeason?.minPrice);
  const highSeasonMax = addComma(seasonPricing?.highSeason?.maxPrice);

  return (
    <PriceContainer>
      {!loading && !totalPrice && (
        <>
          <PriceBox>
            <PriceText>
              <img src="/low.svg" alt="" />
              Budget Season
            </PriceText>
            ${lowSeasonMin} - {lowSeasonMax}
            <PriceText>per night</PriceText>
          </PriceBox>
          <PriceBox>
            <PriceText>
              {' '}
              <img src="/high.svg" alt="" />
              Prime Season
            </PriceText>
            ${highSeasonMin} - {highSeasonMax}
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
