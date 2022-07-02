import { Stack, Container, Col, Row, Button } from "react-bootstrap";
import { useMethodFireStore } from "./hooks/useFireStore";
import { useModal } from "./hooks/useModal";
import { modelTaskData } from "./interface/index";
import { PropsTaskData } from "./types/types";

const TaskList = ({ dataList }: PropsTaskData): JSX.Element => {
  const { deleteDocCompled } = useMethodFireStore();

  const { ModalView, openModal } = useModal();

  return (
    <>
    <Container>
      <Stack>
        {dataList?.tasks.map((data: modelTaskData, index: number) => {
          return (
            <div key={index}>
              <Row key={index} className=" gap-2  gap-md-3   ga-lg-4">
                <Col md={3} lg={4}>
                  {data.title}
                </Col>
                <Col md={3}>{data.description}</Col>
                <Col>
                  <Button variant="secondary" onClick={()=>openModal()}>Update Task</Button>


          
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => deleteDocCompled(data.id)}
                  >
                    Delete Task
                  </Button>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
      </Stack>
    </Container>
    <ModalView id={`test`}/>
    </>

  );
};

export default TaskList;
