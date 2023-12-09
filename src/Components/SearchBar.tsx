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
} from './Styles';

export const SearchBar = () => {
  return (
    <NavContainer>
      <HeaderBar>
        <NavLogo src="/logo-text-astay.svg" />
        <NavLinks>
          <Link href="/">Find Homes</Link>
          <Link href="/">Partners</Link>
          <Link href="/">Company Retreats</Link>
          <Link href="/">More</Link>
        </NavLinks>
        <AuthButtonsContainer>
          <AuthButton>Sign In</AuthButton>
          <AuthButton>Sign Up</AuthButton>
        </AuthButtonsContainer>
      </HeaderBar>
      <InputBar>
        <InputLabel width="25%">
          Where
          <Input placeholder="Any region" />
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
          <Input placeholder="Any region" />
        </InputLabel>
      </InputBar>
    </NavContainer>
  );
};
