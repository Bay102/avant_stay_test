import { InputLabel, NavSelect, VerticalLine } from '../Styles';
import { useAppProvider, useGetRegions } from '../Providers/hookExports';
// import { useLocation, useNavigate } from 'react-router-dom';

const Regions = () => {
  const { data } = useGetRegions();
  const { updateUrlParams } = useAppProvider();

  // const navigate = useNavigate();
  // const location = useLocation();

  // const regionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const searchParams = new URLSearchParams(location.search);
  //   searchParams.set('region', e.target.value);
  //   navigate(`${location.pathname}?${searchParams.toString()}`);
  // };

  return (
    <>
      <InputLabel width="30%">
        Where
        <NavSelect onChange={(e) => updateUrlParams('region', e)} name="" id="">
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
