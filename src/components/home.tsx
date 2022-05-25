import { Container } from "react-bootstrap/";
import AddTask from "./add-task";
import TaskList from "./task-list";
import { modelDataBase } from "./interface/index";
import { UserEmail } from "./types/types";

import { useMethodFireStore } from "./hooks/useFireStore";

const Home = ({ userEmail }: UserEmail) => {
  const { docsData } = useMethodFireStore();

  return (
    <Container>
      <h3 className="text-center" style={{ margin: "5rem auto" }}>
        {" "}
        You have logged in {userEmail}
      </h3>
      {/* <hr /> */}
      <AddTask />
      <TaskList dataList={docsData as modelDataBase} />
    </Container>
  );
};

export default Home;
