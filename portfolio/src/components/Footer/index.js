import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About </FooterLinkTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="portfolio">Portfolio</FooterLink>
              <FooterLink to="contact">Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact </FooterLinkTitle>
              <FooterLink to="about">Test 2</FooterLink>
              <FooterLink to="about">Test 1</FooterLink>
              <FooterLink to="about">Test 3</FooterLink>
              <FooterLink to="about">Test 4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Top Projects </FooterLinkTitle>
              <FooterLink to="about">Test 1</FooterLink>
              <FooterLink to="about">Test 2</FooterLink>
              <FooterLink to="about">Test 3</FooterLink>
              <FooterLink to="about">Test 4</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="Facebook">Test 1</FooterLink>
              <FooterLink to="Instagram">Test 2</FooterLink>
              <FooterLink to="Linkedin">Test 3</FooterLink>
              <FooterLink to="about">Test 4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Rory Mackintosh
            </SocialLogo>
            <WebsiteRights>
              Rory Mackintosh Portfolio © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="https://www.facebook.com/rory.mackintosh.739"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.instagram.com/rorymackinto/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://www.linkedin.com/in/rory-mackintosh-2984632a6/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
