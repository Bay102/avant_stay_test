import styled from 'styled-components';
//  color: ${(props) => props.color || 'row'}

// NavBar Styles

export const NavContainer = styled.div`
  width: 100%;
  height: 128px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ebebeb;
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
`;

export const Link = styled.a`
  width: max-content;
  text-decoration: none;
  color: #333;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 13px;
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
`;

export const NavLogo = styled.img`
  cursor: pointer;
`;

export const InputBar = styled.div`
  display: flex;
  width: 90%;
  height: max-content;
  margin: auto;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

interface InputLabelProps {
  width?: string;
}

export const InputLabel = styled.div<InputLabelProps>`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-family: 'Source Sans 3', sans-serif;
  color: #53c3d0;
  width: ${(props) => props.width || 'auto'};
  padding: 5px 10px;
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

export const VerticalLine = styled.hr`
  display: flex;
  align-self: center;
  height: 30px;
  width: 1px;
  background: lightgray;
  border: none;
  margin: 0;
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
  border: 1px solid #ccc;
`;

// HomeCard Styles

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  width: 50%;
  height: auto;
`;

export const Name = styled.h2`
  font-size: 1rem;
  color: #333;
`;

export const Attributes = styled.div`
  display: flex;
  gap: 20px;
`;

export const Attribute = styled.p`
  font-size: 1em;
  color: #666;
`;
