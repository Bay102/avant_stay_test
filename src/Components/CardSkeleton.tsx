import {
  Attributes,
  Card,
  Image,
  Info,
  LoadingBar,
  LoadingWrapper,
  Location,
  Name,
} from './Styles';

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
        <PriceSkeleton></PriceSkeleton>
      </Info>
    </Card>
  );
};

export const PriceSkeleton = () => {
  return (
    <LoadingWrapper>
      <LoadingBar width="74px" height="17px" />
      <LoadingBar width="98px" height="22px" />
      <LoadingBar width="45px" height="17px" />
    </LoadingWrapper>
  );
};
