import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Subtitle2,
  Subtitle3,
  ImgWrap,
  Img,
  StyledContactForm,
} from "./contactElements";

const ContactSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  description2,
  description3,
  img,
  alt,
}) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynfnlcq", // Replace with your EmailJS service ID
        "template_dwr3djs", // Replace with your EmailJS template ID
        form.current,
        "1uNXFzVh-NbQA5lSP" // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    form.current.reset(); // Optionally reset the form after submission
  };

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <Subtitle2 darkText={darkText}>{description2}</Subtitle2>
              <Subtitle3 darkText={darkText}>{description3}</Subtitle3>
              <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" required />
                  <label>Email</label>
                  <input type="email" name="user_email" required />
                  <label>Message</label>
                  <textarea name="message" required />
                  <input type="submit" value="Send" />
                </form>
              </StyledContactForm>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default ContactSection;
