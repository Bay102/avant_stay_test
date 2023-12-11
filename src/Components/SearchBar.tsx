import {
  HeaderBar,
  InputBar,
  NavContainer,
  NavLogo,
  NavLinks,
  Link,
  AuthButtonsContainer,
  AuthButton,
  Input,
  InputLabel,
  VerticalLine,
  NavSelect,
  CouponBox,
  InputContainer,
} from './Styles';

export const SearchBar = () => {
  return (
    <NavContainer>
      <HeaderBar>
        <NavLogo src="/logo-text-astay.svg" />
        <NavLinks>
          <Link color="#53C3D0" href="/">
            Find Homes
          </Link>
          <Link href="/">Partners</Link>
          <Link href="/">Company Retreats</Link>
          <Link href="/">
            More
            <img src="/chevron_down.svg" className="chevron_down" />
          </Link>
        </NavLinks>
        <AuthButtonsContainer>
          <AuthButton>Sign In</AuthButton>
          <AuthButton color="#022B54">Sign Up</AuthButton>
        </AuthButtonsContainer>
      </HeaderBar>
      <InputContainer>
        <InputBar>
          <InputLabel width="30%">
            Where
            <NavSelect name="" id="">
              <option value="">Any Region</option>
            </NavSelect>
          </InputLabel>
          <VerticalLine />
          <InputLabel width="20%">
            When
            <Input placeholder="Select.." />
          </InputLabel>
          <VerticalLine />
          <InputLabel width="15%">
            Who
            <Input placeholder="Select..." />
          </InputLabel>
          <VerticalLine />
          <InputLabel width="10%">
            Order
            <NavSelect name="" id="">
              <option value="">Relevance</option>
            </NavSelect>
            {/* <Input placeholder="Any region" /> */}
          </InputLabel>
        </InputBar>
        <CouponBox width="20%">
          Coupon
          <Input placeholder="Got a code?" />
        </CouponBox>
      </InputContainer>
    </NavContainer>
  );
};
