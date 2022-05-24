import { useEffect, useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Layout from "./components/layout";
import Header from "./components/header";
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
  // console.log(userGlobalState);
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Layout>
        <Header isUser={userGlobalState} />
        {userGlobalState === null ? (
          <h1>Loading...</h1>
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
