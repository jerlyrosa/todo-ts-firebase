import { useEffect, useState } from "react";
import Home from "./components/home";
import Login from "./components/login";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { getAuth,  onAuthStateChanged } from "firebase/auth";


function App() {
  const [ userGlobal, setUserGlobal] = useState<boolean | null >(null)


    
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserGlobal(true);
      } else {
        setUserGlobal(false);
        console.log("error");
      }
    });
},[])

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
   
    >
      {userGlobal === null ?(<h1>Loading...</h1>): userGlobal === true ?(<Home/>):(<Login/>)}
    </ThemeProvider>
  );
}

export default App;
