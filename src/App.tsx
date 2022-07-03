import { useEffect, useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Layout from "./components/layout";
import Header from "./components/header";
import { Container } from "react-bootstrap";
import FooterUI from "./footer";
import styled from "@emotion/styled";

function App() {
  const [userGlobalState, setUserGlobalState] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserGlobalState(true);
        setUserEmail(user.email);
      } else {
        setUserGlobalState(false);
        console.log("error");
      }
    });
  }, []);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Section>
        <Layout>
          <Header isUser={userGlobalState} />
          {userGlobalState === null ? (
            <Container>
              <h1 className="text-center" style={{ margin: "25rem auto" }}>
                Loading...
              </h1>
            </Container>
          ) : userGlobalState === true ? (
            <Home userEmail={userEmail as string} />
          ) : (
            <Login />
          )}
        </Layout>
      </Section>
      <FooterUI />
    </ThemeProvider>
  );
}

export default App;

const Section = styled.section`
    /* position: relative; */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 140rem;
  min-height: 87vh;
  overflow-wrap: anywhere;
`;
