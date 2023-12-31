import { useAppProvider } from '../Providers/hookExports';
import { InputLabel, NavSelect, VerticalLine } from '../Styles';

export const Guests = () => {
  const { updateUrlParams } = useAppProvider();

  return (
    <>
      <InputLabel width="20%">
        Who
        <NavSelect onChange={(e) => updateUrlParams('guests', null, e)}>
          <option value="">Select...</option>
          {Array.from({ length: 30 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1 + ' guests'}
            </option>
          ))}
        </NavSelect>
      </InputLabel>
      <VerticalLine />
    </>
  );
};
