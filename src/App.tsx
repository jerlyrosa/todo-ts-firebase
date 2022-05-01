import { useEffect, useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import ThemeProvider from 'react-bootstrap/ThemeProvider'


function App() {
  const [ userGlobal, setUserGlobal] = useState(null)
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
   
    >
      {userGlobal ? <Home /> : <Login />}
    </ThemeProvider>
  );
}

export default App;
