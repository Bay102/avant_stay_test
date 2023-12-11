import { Home } from '../types';
import {
  Attribute,
  AttributeIcon,
  Attributes,
  Card,
  Image,
  Info,
  Location,
  Name,
} from './Styles';

export const HomeCard = ({ home }: { home: Home }) => {
  return (
    <Card>
      <Image src={home.photos[0]?.url} alt={home.title} />
      <Info>
        <Location>
          {home.regionName} | {home.cityName}
        </Location>
        <Name>{home.title}</Name>
        <Attributes>
          <Attribute>
            <AttributeIcon src="/rooms.svg" />
            {home.bedsCount} Beds
          </Attribute>
          <Attribute>
            <AttributeIcon src="/bath.svg" />
            {home.bathroomsCount} Baths
          </Attribute>
          {home.hasPool ? (
            <Attribute>
              {' '}
              <AttributeIcon src="/pool.svg" />
              Pool
            </Attribute>
          ) : null}
          <Attribute>
            <AttributeIcon src="/user.svg" />
            {home.maxOccupancy} Guests
          </Attribute>
        </Attributes>
      </Info>
    </Card>
  );
};
