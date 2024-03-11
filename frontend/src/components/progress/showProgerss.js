import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatcheTasks, getOneTask, putOneTask } from "../../redux/task/taskApi";
import {getMatchProgress,deleteOneProgress,getOneProgress} from "../../redux/progress/progressApi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import DeleteConfirm from "../projectInterface/projectModal/deleteModal";
import ShareTask from "../share/taskShare";
import {useParams} from "react-router-dom"
import AddTask from "./addProgress";
import "../../App.css";

function ShowProgress({ setModal, setEdit}) {
  const dispatch = useDispatch();
  const projectId= useParams().id
  const [delId, setDelId] = useState("");
  const [progerss, setProgress] = useState(false);
  const [progres, setProgres] = useState([]);
  const [data, setData] = useState([]);

  const allData = useSelector((state) => state.datas.matchTasks);
  const progreses = useSelector((state) => state?.progress?.matchProgress);
  const oneProgress = useSelector((state) => state?.progress?.singleProgress);

  // console.log(projectId);

  useEffect(() => {
    dispatch(getMatcheTasks(projectId));   /* here is getting matched task usng project id */
    dispatch(getMatchProgress(projectId));  /* here is getting matched progress using project id  */
  }, []);

  useEffect(() => {
    setProgres(progreses);
    setData(allData);
  }, [progreses, allData]);

  const editHandleBtn = async (id) => {
    await dispatch(getOneTask(id));
    setModal(true);
    setEdit(true);
  };

  const handleEdit = async (id) => {
    await dispatch(getOneProgress(id));
    setProgress(true);
  };

  // pending arangements =================
  const onDragEnd = async (result) => {

    if (!result.destination) return;

    let option = result.destination?.droppableId;
    let dataId = result.draggableId;

    console.log("destid:", option, "dragebleID:", dataId);
    await dispatch(putOneTask({ option: option, id: dataId }));
    await dispatch(getMatcheTasks(projectId));
  };

  // ===========================================

  return (
    <>
      <div className="kanban-board">
        <DragDropContext onDragEnd={onDragEnd}>
          {progres.map((status, index) => (
            <Droppable
              droppableId={status._id}
              type="TASK"
              key={status._id}
              index={index}
            >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="task-list-container"
                >
                  <div
                    className={`column todo`}
                    data-status="todo"
                    key={index}
                    draggable={true}
                  >
                    <div className="statusHeader">
                      <h2>{status?.status}</h2>
                      <div className="actions">
                        <DriveFileRenameOutlineSharpIcon className="mui_Icon" onClick={() => handleEdit(status._id)}/>
                        <DeleteConfirm className="mui_Icon" progressDeleteId={status._id}/>
                      </div>
                    </div>
                    {data.map(
                      (data, index) =>
                        data?.option === status?._id && (
                          <Draggable
                            key={data._id}
                            draggableId={data._id}
                            index={index}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`task-list ${
                                  snapshot.isDragging ? "dragging" : ""
                                }`}
                              >
                                <div className="todo taskBlock" key={index}>
                                <div className="shareTask">
                                  <h4>{data.title}</h4>
                                  <ShareTask taskId={data._id} projectId={projectId}/>
                                </div>
                                  <p className="tasks">{data.deSc}</p>
                                  <div className="dueDate">
                                    dueDate: {data.expDate?.split("T")[0]}
                                  </div>
                                  <div className="actions">
                                    <DriveFileRenameOutlineSharpIcon className="mui_Icon" onClick={() => editHandleBtn(data._id)}/>
                                    <DeleteConfirm  className="mui_Icon" deleteTask={data._id}/>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                    )}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
      {progerss ? (
        <AddTask setProgress={setProgress} oneProgress={oneProgress} />
      ) : null}
    </>
  );
}

export default ShowProgress;
