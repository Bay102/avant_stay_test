import { Home } from '../types';
import { Attribute, Attributes, Card, Image, Info, Name } from './Styles';

export const HomeCard = ({ home }: { home: Home }) => {
  return (
    <Card>
      <Image src={home.photos[0]?.url} alt={home.title} />
      <Info>
        <Name>{home.title}</Name>
        <Attributes>
          <Attribute>{home.bathroomsCount} Baths</Attribute>
          <Attribute>{home.maxOccupancy} Guests</Attribute>
          <Attribute>{home.bedsCount} Beds</Attribute>
          {/* <Field>${home.sea}</Field> */}
        </Attributes>
      </Info>
    </Card>
  );
};
