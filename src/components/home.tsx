import { useMethodAuth } from "./hooks/useMethodAuth";



const Home = () => {


  const {  AuthSignOut }= useMethodAuth();

  return(

    <section>

    <h1>You have logged in</h1>
    <button onClick={AuthSignOut}>Sign Out</button>
  </section>
    ) 
};

export default Home;
