import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from "@emailjs/browser";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
`;

const Tittle = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 80px;
    color: ${({theme}) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_q2v31er",
            "template_nggwy69",
            e.target,
            "kKZoMFrRGR6RXRHLH"
        )
        .then(
            (result) => {
                alert("Message Sent, Thank you for you message!");
            },
            (error) => {
                alert("Error, " + error);
            }
        );

    }

  return (
    <Container id="Contact">
      <Wrapper>
        <Tittle>Contact</Tittle>
        <Desc 
          style={{
            marginBottom: "40px",
          }}
            >Feel free to contact me.
        </Desc>
        <ContactForm onSubmit={handleSubmit}>
            <ContactTitle>Email me</ContactTitle>
            <ContactInput placeholder="Your email" name="from_email" />
            <ContactInput placeholder="Your name" name="from_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" name="message" rows={4} />
            <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact;
