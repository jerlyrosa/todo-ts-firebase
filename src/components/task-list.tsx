import { Stack, Container, Col, Row, Button } from "react-bootstrap";

import { modelTaskData } from "./interface/index";
import { PropsTaskData } from "./types/types";

const TaskList = ({ dataList }: PropsTaskData): JSX.Element => {
  return (
    <Container>
      <Stack >
        {dataList.map((data: modelTaskData, index:number) => {
          return (
            <div key={index}>
              <Row key={index}>
                <Col md={7}>{data.description}</Col>
                <Col>
                  <Button>View File</Button>
                </Col>
                <Col>
                  <Button variant="danger">Delete Task</Button>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
      </Stack>
    </Container>
  );
};

export default TaskList;