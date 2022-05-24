import { Container } from "react-bootstrap/";
import AddTask from "./add-task";
import TaskList from "./task-list";
import { modelTaskData } from "./interface/index";
import { UserEmail } from "./types/types";

import { useMethodFireStore } from "./hooks/useFireStore";

const Home = ({ userEmail }: UserEmail) => {
  const { docsData } = useMethodFireStore();

  return (
    <Container>
      <h3 className="text-center">You have logged in {userEmail}</h3>
      <hr />
      <AddTask />
      <TaskList dataList={docsData as modelTaskData[]} />
    </Container>
  );
};

export default Home;
