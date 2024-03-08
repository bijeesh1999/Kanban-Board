import { useState } from "react";
import { useSelector } from "react-redux";
import ShowProgress from "../progress/showProgerss";
import AddProgress from "../progress/addProgress";
import {useParams} from "react-router-dom"
import cookie from "js-cookie"
import Form from "../form/form";

function CanbanBoard() {
  const [modal, setModal] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [progerss, setProgress] = useState(false);
  const [id , setId]=useState(useParams().id)
  const [adminId , setAdiminId] = useState(cookie.get('id'))
  const singleData = useSelector((state) => state.datas.singleData);
  const progreses = useSelector((state) => state?.progress?.allProgress);
  const singeleProgress = useSelector(
    (state) => state.progress?.singleProgress
  );

  // console.log(adminId);

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <div className="header-left">Kanban Board</div>
        <div className="header-right">
          <button className="add_status" onClick={() => setProgress(true)}>
            add status
          </button>
          <button id="add-task-btn" onClick={() => setModal(true)}>
            Add Task
          </button>
        </div>
      </header>
      <ShowProgress setModal={setModal} setEdit={setEditBtn} />
      {progerss ? (
        <AddProgress setProgress={setProgress} singeleProgress={singeleProgress} id={id} adminId={adminId} />
      ) : null}

      {modal ? (
        <Form
          setModal={setModal}
          editBtn={editBtn}
          singleData={singleData}
          progreses={progreses}
          id={id}
          adminId={adminId}
        />
      ) : null}

      <footer>
        <p>Kanban Board Application</p>
      </footer>
    </div>
  );
}

export default CanbanBoard;
