import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

function Header(){
    return(
         <MainHeader>
            <NavLink to="/">
                <img src="./Images/logo.png" alt="logo" className="logo"/>
            </NavLink>
            <Navbar />
        </MainHeader>
    )
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 12%;
  }
`;

export default Header;