import { Order } from './Order';
import Regions from './Regions';
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
  CouponBox,
  InputContainer,
  NavSelect,
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
          <Regions />
          <InputLabel width="20%">
            When
            <Input placeholder="Select.." />
          </InputLabel>
          <VerticalLine />
          <InputLabel width="15%">
            Who
            <NavSelect>
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </NavSelect>
          </InputLabel>
          <VerticalLine />
          <Order />
        </InputBar>
        <CouponBox width="20%">
          Coupon
          <Input placeholder="Got a code?" />
        </CouponBox>
      </InputContainer>
    </NavContainer>
  );
};
