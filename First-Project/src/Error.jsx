import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

function Error(){
    return(
        <Wrapper>
        <img width={400} src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="error" />
        <NavLink to="/">
          <Button className="btn"> Go Back</Button>
        </NavLink>
      </Wrapper>
  
    )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;