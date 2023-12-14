import { InputLabel, NavSelect, VerticalLine } from './Styles';
import { useAppProvider, useGetRegions } from './Providers/hookExports';

const Regions = () => {
  const { data } = useGetRegions();
  // const {setHomes} = useAppProvider();
  console.log(data);

  return (
    <>
      <InputLabel width="30%">
        Where
        <NavSelect name="" id="">
          {data?.regions.map((region) => (
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
