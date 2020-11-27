import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Exploit</h1>
          <p>We cant drive to win all this sheet</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact US</FooterLinkTitle>
          <FooterLink to={"/about"}>About</FooterLink>
          <FooterLink to={"/support"}>Support</FooterLink>
          <FooterLink to={"/destination"}>Destination</FooterLink>
          <FooterLink to={"/sponsorships"}>Sponsor</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact US</FooterLinkTitle>
          <FooterLink to={"/about"}>About</FooterLink>
          <FooterLink to={"/support"}>Support</FooterLink>
          <FooterLink to={"/destination"}>Destination</FooterLink>
          <FooterLink to={"/sponsorships"}>Sponsor</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact US</FooterLinkTitle>
          <FooterLink to={"/about"}>About</FooterLink>
          <FooterLink to={"/support"}>Support</FooterLink>
          <FooterLink to={"/destination"}>Destination</FooterLink>
          <FooterLink to={"/sponsorships"}>Sponsor</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px)/2);
  display: grid;
  grid-template-columns: 1fr;  
  color: #000000;
  background: #fafafa;
`

const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
  margin-bottom: 3rem;
  color: #f262ae;
  }
  @media screen and(max-width: 400px) {
  padding: 1rem;
  `
  const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  
  @media screen and(max-width: 820px) {
  grid-template-columns: 1fr;
}
`

const FooterLinkItems = styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;


@media screen and(max-width: 400px) {
padding: 1rem;
}
`
const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`
const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #3d3d3e;

&:hover {
color : #f26a2e;
transition: 0.3s ease-out;
}

`