import { useAppProvider } from '../Providers/hookExports';
import { InputLabel, NavSelect } from '../Styles';

export const Order = () => {
  const { updateUrlParams } = useAppProvider();

  return (
    <InputLabel width="10%">
      Order
      <NavSelect onChange={(e) => updateUrlParams('order', e)} name="" id="">
        <option value="RELEVANCE">Relevance</option>
        <option value="PRICE_ASC">Price: lowest first</option>
        <option value="PRICE_DESC">Price: highest first</option>
      </NavSelect>
    </InputLabel>
  );
};
