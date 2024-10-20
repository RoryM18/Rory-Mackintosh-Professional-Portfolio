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
              <FooterLink href="/">Home</FooterLink>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="skills">Skills</FooterLink>
              <FooterLink to="portfolio">Portfolio</FooterLink>
              <FooterLink to="contact">Contact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contact </FooterLinkTitle>
              <FooterLink
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rorymac126@gmail.com&su=SUBJECT&body=BODY"
                target="_blank"
                aria-label="email"
              >
                Email
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/rory-mackintosh-2984632a6/"
                target="_blank"
                aria-label="Linkedin"
              >
                Linkedin
              </FooterLink>
              <FooterLink to="about"></FooterLink>
              <FooterLink to="about"></FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Top Projects </FooterLinkTitle>
              <FooterLink
                href="https://github.com/RoryM18/Rory-Mackintosh-Professional-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                Portfolio Website
              </FooterLink>
              <FooterLink
                href="https://github.com/RoryM18/Honours-Project-Genetic-Algorithm-Planner"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                Genetic Algorithm Planner
              </FooterLink>
              <FooterLink
                href="https://github.com/RoryM18/sem_group20"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                DevOps Group Project
              </FooterLink>
              <FooterLink to="about"></FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink
                href="https://www.facebook.com/rory.mackintosh.739"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook
              </FooterLink>
              <FooterLink
                href="https://www.instagram.com/rorymackinto/"
                target="_blank"
                aria-label="Instagram"
              >
                Instagram
              </FooterLink>
              <FooterLink
                href="https://www.linkedin.com/in/rory-mackintosh-2984632a6/"
                target="_blank"
                aria-label="Linkedin"
              >
                Linkedin
              </FooterLink>
              <FooterLink to="about"></FooterLink>
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
