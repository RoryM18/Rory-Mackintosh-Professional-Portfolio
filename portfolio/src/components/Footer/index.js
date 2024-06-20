import React from "react";
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
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Aboout Us </FooterLinkTitle>
              <FooterLink to="/about">Test 1</FooterLink>
              <FooterLink to="/about">Test 2</FooterLink>
              <FooterLink to="/about">Test 3</FooterLink>
              <FooterLink to="/about">Test 4</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Aboout Us </FooterLinkTitle>
              <FooterLink to="/about">Test 1</FooterLink>
              <FooterLink to="/about">Test 2</FooterLink>
              <FooterLink to="/about">Test 3</FooterLink>
              <FooterLink to="/about">Test 4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Aboout Us </FooterLinkTitle>
              <FooterLink to="/about">Test 1</FooterLink>
              <FooterLink to="/about">Test 2</FooterLink>
              <FooterLink to="/about">Test 3</FooterLink>
              <FooterLink to="/about">Test 4</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Aboout Us </FooterLinkTitle>
              <FooterLink to="/about">Test 1</FooterLink>
              <FooterLink to="/about">Test 2</FooterLink>
              <FooterLink to="/about">Test 3</FooterLink>
              <FooterLink to="/about">Test 4</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Socials</SocialLogo>
            <WebsiteRights>
              Rory Mackintosh Portfolio © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" aria-label="Linkedin">
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
