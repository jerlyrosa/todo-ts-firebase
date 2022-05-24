import { Navbar, Container, Button } from "react-bootstrap";
import { useMethodAuth } from "./hooks/useMethodAuth";
type data = {
  isUser: boolean | null;
};
const Header = (isUser: data): JSX.Element => {
  const { AuthSignOut } = useMethodAuth();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Todo App with Ts</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isUser.isUser === true && (
            <Button onClick={AuthSignOut} variant="outline-light">
              Sign Out
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
