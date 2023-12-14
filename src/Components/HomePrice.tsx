import { useHomePrice } from './Providers/hookExports';
import { PriceContainer } from './Styles';

export const HomePrice = () => {
  const { loading, error, data } = useHomePrice({
    ids: ['15633e74-4f59-11e9-87e3-c1cda8d0e495'],
    period: { checkIn: '2022-01-01', checkOut: '2022-01-02' },
  });

  return <PriceContainer></PriceContainer>;
};
