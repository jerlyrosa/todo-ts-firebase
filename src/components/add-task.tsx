import React, { SyntheticEvent } from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useMethodFireStore } from "./hooks/useFireStore";

const AddTask = () => {

  const { addFirebase } = useMethodFireStore();

  const onSummitFuntion = (e: SyntheticEvent): void => {
    addFirebase(e)

  }


  return (
    <Container onSubmit={onSummitFuntion}>
      <Form>
        <Row className="justify-content-xs-center xs-5 gap-4">
          <Col xs={12} md={4} lg={4}>
            <Form.Control type="text" id="name" placeholder="Task Title"  required />
          </Col>
          <Col xs={12} md={7} lg={5}>
            <Form.Control
              as="textarea"
              placeholder="Task Description"
              id="decription"
            />
          </Col>
          <Col>
            <Button type="submit" variant="outline-secondary">
              {" "}
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
  );
};

export default AddTask;
