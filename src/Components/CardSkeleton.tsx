import {
  Attributes,
  Card,
  Image,
  Info,
  LoadingBar,
  Location,
  Name,
} from './Styles';

export const CardSkeleton = () => {
  return (
    <div>
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
      <br />
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
      <br />
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
    </div>
  );
};
