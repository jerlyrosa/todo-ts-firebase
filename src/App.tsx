import { useEffect, useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Layout from "./components/layout";
import Header from "./components/header";
import { Container } from "react-bootstrap";
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
      <Layout>
        <Header isUser={userGlobalState} />
        {userGlobalState === null ? (
          <Container>

          <h1 className="text-center">Loading...</h1>
          </Container>
        ) : userGlobalState === true ? (
          <Home userEmail={userEmail as string} />
        ) : (
          <Login />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
