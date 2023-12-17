import styled from 'styled-components';

// NavBar Styles
export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  background-color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
  z-index: 1;
`;

export const HeaderBar = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

export const NavLinks = styled.div`
  width: max-content;
  display: flex;
  gap: 20px;
  position: relative;
`;

export const Link = styled.a`
  position: relative;
  width: max-content;
  text-decoration: none;
  color: ${(props) => props.color || '#333'};
  border-bottom: 2px solid ${(props) => props.color || 'transparent'};
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
`;

export const AuthButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const AuthButton = styled.div`
  width: 96px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid ${(props) => props.color || 'none'};
  border-radius: 4px;
`;

export const NavLogo = styled.img`
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  // justify-content: center;
  margin: auto;
  width: 90%;
  gap: 10px;
`;

export const InputBar = styled.div`
  display: flex;
  height: 50px;
  width: 90%;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
`;

interface InputLabelProps {
  width?: string;
  mLeft?: string;
}

export const InputLabel = styled.div<InputLabelProps>`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-family: 'Source Sans 3', sans-serif;
  color: #53c3d0;
  width: ${(props) => props.width || 'auto'};
  padding: 5px 10px;
  margin-left: ${(props) => props.mLeft || '0'};
  cursor: pointer;
`;

export const FormatDate = styled.div`
  color: black;
  font-size: 12px;
`;

export const Input = styled.input`
  height: 25px;
  border: none;
  font-family: 'Source Sans 3', sans-serif;

  &:focus {
    border: none;
    outline: none;
  }
`;

export const CouponBox = styled.div<InputLabelProps>`
  display: flex;
  flex-direction: column;
  height: 50px;
  margin: auto;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: 11px;
  font-family: 'Source Sans 3', sans-serif;
  color: #53c3d0;
  padding: 5px 10px;
  width: ${(props) => props.width || 'auto'};
`;

export const VerticalLine = styled.hr`
  display: flex;
  align-self: center;
  height: 30px;
  width: 1px;
  background: lightgrey;
  border: none;
  margin: 0;
`;

export const NavSelect = styled.select`
  height: 25px;
  border: none;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

//Search Page Styles

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomesContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: max-content;
  //   border: 1px solid #ccc;
  margin-top: 185px;
`;

export const CountContainer = styled.div`
  position: relative;
`;

export const CountHeader = styled.p`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 10px;
  font-weight: 100;
  color: #53c3d0;
  margin: 0;
`;

export const CountLine = styled.div`
  position: absolute;
  left: 90px;
  bottom: 42px;
  display: flex;
  align-items: center;
  height: 0.1px;
  width: 68px;
  margin: 5px 7px;
  background-color: #53c3d0;
`;

export const Count = styled.div`
  font-size: 28px;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 100;
`;

// HomeCard Styles

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 10px;
  height: max-content;
`;

export const Info = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

export const Image = styled.img`
  width: 390px;
  height: 208px;
`;

export const Location = styled.div`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
  color: #53c3d0;
`;

export const Name = styled.h2`
  font-size: 1rem;
  font-family: 'Afacad', sans-serif;
  color: #333;
  margin: 5px 0;
`;

export const Attributes = styled.div`
  font-family: 'Source Sans 3', sans-serif;
  font-size: 12px;
  display: flex;
  gap: 20px;
`;

export const AttributeIcon = styled.img``;

export const Attribute = styled.p`
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #666;
  margin: 2px 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  gap: 30px;
  height: 60px;
  width: 100%;
  // background-color: #f5f5f5;
  margin-top: 40px;
  // border-top: 1px solid #ebebeb;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: max-content;
  height: 100%;
  font-family: 'Source Sans 3', sans-serif;
`;

export const TotalPrice = styled.div`
  text-align: left;
`;

export const Season = styled.div`
  font-size: 12px;
  color: grey;
  // padding-left: 20px;
`;

type LBar = {
  width?: string;
  height?: string;
  background?: string;
};

export const LoadingBar = styled.div<LBar>`
  width: ${(props) => props.width || '0'};
  height: ${(props) => props.height || '0'};
  background: lightgrey;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
`;

// No Results
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 510px;
  margin: auto;
  padding: 10% 10%;
`;

export const Illustration = styled.img`
  width: 185px;
  height: 178px;
  margin-bottom: 30px;
`;

export const NoResultsText = styled.div`
  font-family: 'Source Sans 3', sans-serif;
`;
