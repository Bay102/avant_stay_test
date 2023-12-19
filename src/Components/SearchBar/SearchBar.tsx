import { Order } from './Order';
import Regions from './Regions';
import { Dates } from './DatePicker';
import { Guests } from './Guests';
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
  CouponBox,
  InputContainer,
  VerticalLine,
} from '../Styles';

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
          <Dates />
          <VerticalLine />
          <Guests />
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
