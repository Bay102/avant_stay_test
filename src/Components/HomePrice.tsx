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
  const { priceLoad, loading } = useAppProvider();

  return (
    <PriceContainer>
      {!loading && !totalPrice && (
        <>
          <PriceBox>
            <Season>Budget Season</Season>${seasonPrice.lowSeason.minPrice} -{' '}
            {seasonPrice.lowSeason.maxPrice}
          </PriceBox>
          <PriceBox>
            <Season>Prime Season</Season>${seasonPrice.highSeason.minPrice} -{' '}
            {seasonPrice.highSeason.maxPrice}
          </PriceBox>
        </>
      )}
      {priceLoad && <div>Loading...</div>}
      {!loading && totalPrice && (
        <PriceBox>
          <Season>Total | {nights} nights</Season>
          <TotalPrice>{`$${totalPrice}`}</TotalPrice>
        </PriceBox>
      )}
    </PriceContainer>
  );
};
