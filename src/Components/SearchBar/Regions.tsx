import { InputLabel, NavSelect, VerticalLine } from '../Styles';
import { useAppProvider, useGetRegions } from '../Providers/hookExports';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Region } from '../../gql/graphql';

const Regions = () => {
  const { data: regions } = useGetRegions();
  const [searchParams] = useSearchParams();

  const { selectedRegion, setSelectedRegion } = useAppProvider();

  const navigate = useNavigate();

  const navigateToRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const regionId = regions?.regions.find((region: Region | null) =>
      (region as Region)?.name.includes(e.target.value)
    )?.id;
    const regionName = e.target.value.replace(/\s/g, '-');
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('region');
    setSelectedRegion(e.target.value);

    if (regionId) {
      newSearchParams.append('region', regionId);
      navigate(`/regions/${regionName}?${newSearchParams.toString()}`);
    }
    if (regionName === 'all') {
      newSearchParams.delete('region', regionId);
      navigate(`/homes?${newSearchParams.toString()}`);
    }
  };

  return (
    <>
      <InputLabel width="30%">
        Where
        <NavSelect value={selectedRegion} onChange={(e) => navigateToRegion(e)}>
          <option value="all">All Regions</option>
          {regions?.regions.map((region) => (
            <option key={region?.id} value={region?.name}>
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
