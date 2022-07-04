import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "./components/icons/icons";
import styled from "@emotion/styled";

const FooterUI = () => {
  return (
    <Footer>
      <Container>
        <SocialBox>
          <span>
            <a
              href="https://www.instagram.com/jerly_hdt/?hl=es"
              aria-label="instagram"
            >
              <IconInstagram />
            </a>
          </span>
          <span>
            <a href="https://github.com/sr-jerly" aria-label="github">
              <IconGithub />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/jerlydelarosa/"
              aria-label="linkedin"
            >
              <IconLinkedin />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/sr_jerly" aria-label="twitter">
              <IconTwitter />
            </a>
          </span>
        </SocialBox>
        <Line />
        <Copy>
          &copy; Copyright 2021{" "}
          <a href="https://www.linkedin.com/in/jerlydelarosa/">
            &copy;Jerly De La Rosa
          </a>
        </Copy>
      </Container>
    </Footer>
  );
};

export default FooterUI;
const Footer = styled.footer`
  background: #f5f5f5;
  padding: 2rem 1rem;
  width: 100%;
  position: relative;
  bottom: 0;
  text-align: center;
  z-index: 0;
`;
const Container = styled.div`
  color: white;
  color: #4a4a4a;
  width: 100%;
`;

const SocialBox = styled.span`
  max-height: 8rem;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.7rem;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(17, 12, 12, 0),
    rgb(45 43 43 / 75%),
    rgba(0, 0, 0, 0)
  );
`;

const Copy = styled.div`
  a {
    text-decoration: none;
    color: cornflowerblue;
  }
`;
