import { Stack, Button, Form, Container } from "react-bootstrap";

const Login = () => {
  return (
    <section
      style={{
        width: "30rem",
        margin: "4rem auto",
        backgroundColor: "white",
        padding: "3rem 2.5rem",
        borderRadius: "2rem",
        boxShadow: "0px 4px 39px -11px rgb(184 182 184)",
      }}
    >
      <Container>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <Stack gap={3}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Button variant="primary" type="submit">
            sign in with google
          </Button>
        </Stack>
      </Container>
    </section>
  );
};

export default Login;
