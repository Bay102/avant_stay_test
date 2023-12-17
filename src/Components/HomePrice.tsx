import { HomeSeasonPricing } from '../gql/graphql';
import { useAppProvider } from './Providers/hookExports';
import { PriceBox, PriceContainer, Season, TotalPrice } from './Styles';

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

  return (
    <PriceContainer>
      {!loading && !totalPrice && (
        <>
          <PriceBox>
            <Season>
              <img src="/low.svg" alt="" />
              Budget Season
            </Season>
            ${seasonPrice.lowSeason.minPrice} - {seasonPrice.lowSeason.maxPrice}
            <Season>per night</Season>
          </PriceBox>
          <PriceBox>
            <Season>
              {' '}
              <img src="/high.svg" alt="" />
              Prime Season
            </Season>
            ${seasonPrice.highSeason.minPrice} -{' '}
            {seasonPrice.highSeason.maxPrice}
            <Season>per night</Season>
          </PriceBox>
        </>
      )}
      {totalPrice && (
        <PriceBox>
          <Season>Total | {nights} nights</Season>
          <TotalPrice>{`$${totalPrice}`}</TotalPrice>
        </PriceBox>
      )}
    </PriceContainer>
  );
};
