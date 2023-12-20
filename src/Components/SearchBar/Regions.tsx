import { InputLabel, NavSelect, VerticalLine } from '../Styles';
import { useAppProvider, useGetRegions } from '../Providers/hookExports';

const Regions = () => {
  const { data: regions } = useGetRegions();
  const { updateUrlParams } = useAppProvider();

  return (
    <>
      <InputLabel width="30%">
        Where
        <NavSelect onChange={(e) => updateUrlParams('region', null, e)}>
          <option value="">Select...</option>
          <option value="">All Regions</option>
          {regions?.regions.map((region) => (
            <option key={region?.id} value={region?.id}>
              {region?.name}, {region?.stateCode}
            </option>
          ))}
        </NavSelect>
      </InputLabel>
      <VerticalLine />
    </>
  );
};

export default Regions;
