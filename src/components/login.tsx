import { useState, SyntheticEvent } from "react";
import { Stack, Button, Form, Container } from "react-bootstrap";
import { useMethodAuth } from "./hooks/useMethodAuth";

const Login = () => {
  const { registerAuth, singInWithGoogle } = useMethodAuth();
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const onSummitFuntion = (e: SyntheticEvent): void => {
    registerAuth(e, isRegister);
  };
  return (
    <section
      style={{
        width: "25rem",
        margin: "4rem auto",
        backgroundColor: "white",
        padding: "3rem 1.5rem",
        borderRadius: "1rem",
        boxShadow: "0px 4px 39px -11px rgb(184 182 184)",
      }}
    >
      <Container>
        <h2 style={{ textAlign: "center" }}>
          {isRegister ? "Log in" : "Sign up"}
        </h2>
        <Stack gap={3}>
          <Form onSubmit={onSummitFuntion}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                type="email"
                id="useremailaddress"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="userpassword"
                placeholder="Password"
              />
            </Form.Group>
            <div>
              <Button
                style={{ backgroundColor: "#111827", border: "none" }}
                type="submit"
              >
                {isRegister ? "Log in" : "Sign up"}
              </Button>
            </div>
          </Form>
          <Button
            variant="primary"
            type="submit"
            onClick={() => singInWithGoogle()}
          >
            sign in with google
          </Button>

          <Button
            onClick={() => setIsRegister(!isRegister)}
            style={{ backgroundColor: "#9e9e9e", border: "none" }}
            type="submit"
          >
            {isRegister
              ? "Do you already have an account? "
              : "You do not have an account?"}
          </Button>
        </Stack>
      </Container>
    </section>
  );
};

export default Login;
