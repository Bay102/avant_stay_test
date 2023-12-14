import { InputLabel, NavSelect } from './Styles';

export const Order = () => {
  return (
    <InputLabel width="10%">
      Order
      <NavSelect name="" id="">
        <option value="RELEVANCE">Relevance</option>
        <option value="PRICE_ASC">Price: lowest first</option>
        <option value="PRICE_DESC">Price: highest first</option>
      </NavSelect>
    </InputLabel>
  );
};
