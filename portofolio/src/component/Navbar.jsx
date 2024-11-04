import React from 'react'
import  { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components';
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height:  80px;
    display:  flex;
    align-items:  center;
    justify-content: center;
    font-size: 1rem;
    position:   sticky;
    top:  0;
    z-index: 10;
    color: white;
`;

const NavbarContainer = styled.div`
    width:  100%;
    max-width:  1200px;
    padding:   0  24px;
    display:  flex;
    align-items:  center;
    justify-content: center;
    font-size: 1rem;
`; 
const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    text-decoration: none;
    color: inherit;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items:  center;
    justify-content: center;
    gap:  32px;
    padding: 0 6px;
    list-style: none;
        @media screen and (max-width: 768px){
        display: none;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color:  ${({theme}) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    gap: 15px;
    justify-content: end;
    align-items: center;
    padding: 0 4px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
const GithubButton = styled.div`
    border: 1px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({theme}) => theme.primary};
        color:  ${({theme}) => theme.text_primary};
    }
`;

const LinkedinButton = styled.div`
    border: 1px solid ${({theme}) => theme.linkedin};
    color: ${({theme}) => theme.linkedin};
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.6s ease-in-out;
    text-decoration: none;
    &:hover {
        background: ${({theme}) => theme.linkedin};
        color:  ${({theme}) => theme.text_primary};
    }
`;

const MobileIcon = styled.div`
    height: 100%;
    display:  flex;
    align-items:  center;
    color:  ${({theme}) => theme.text_primary};
`;


const Navbar = () => {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">My Portofolio</NavLogo>
            <MobileIcon>
                <MenuRounded style={{ color: "inherit"}} />
            </MobileIcon>
            <NavItems>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                <NavLink href="#Education">Education</NavLink>
            </NavItems>

            <ButtonContainer>
                <LinkedinButton href={Bio.linkedin} target="_Blank">
                    LinkedIn
                </LinkedinButton>
                <GithubButton href={Bio.github} target="_Blank">
                    Github
                </GithubButton>
            </ButtonContainer>
            </NavbarContainer>
    </Nav>
    
  )
}

export default Navbar
