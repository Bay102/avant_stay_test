import {
  Attributes,
  Card,
  Image,
  Info,
  LoadingBar,
  Location,
  Name,
} from './Styles';

const SingleCard = () => {
  return (
    <Card>
      <Image style={{ background: 'lightgrey' }} alt="" />
      <Info>
        <Location>
          {' '}
          <LoadingBar width="150px" height="20px" />
        </Location>
        <Name>
          <LoadingBar width="200px" height="20px" />
        </Name>
        <Attributes>
          <LoadingBar width="230px" height="15px" />
        </Attributes>
      </Info>
    </Card>
  );
};

export const CardsSkeleton = () => {
  return (
    <>
      <SingleCard />
      <br />
      <SingleCard />
      <br />
      <SingleCard />
    </>
  );
};
