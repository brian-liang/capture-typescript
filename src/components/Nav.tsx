import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                   <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="#contact">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    alight-items: center;
    padding: 1rem 10rem;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #Logo{
        font-size: 2rem;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`
export default Nav;
