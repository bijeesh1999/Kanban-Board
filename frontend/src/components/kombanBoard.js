import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData , getOneData } from "../redux/kanbanApi";
import DeleteModal from "./deleteModal";
import "../App.css";

function CombanBoard() {
  const dispatch = useDispatch();
  const [delId , setDelId] = useState('')
  const [toDo, setToDo] = useState([]);
  const [inProgress, setInProgres] = useState([]);
  const [done, setDone] = useState([]);

  const allData = useSelector((state) => state.datas.allData);
  useEffect(() => {
    dispatch(getAllData());
  }, []);

  useEffect(() => {
    const done = [];
    const inProgress = [];
    const todo = [];
    allData.map((data) => {
      if (data.option === "done") {
        done.push(data);
      } else if (data.option === "in-progress") {
        inProgress.push(data);
      } else {
        todo.push(data);
      }
    });
    setDone(done);
    setInProgres(inProgress);
    setToDo(todo);
  }, [allData]);


  const editHandleBtn= (id) =>{
    dispatch(getOneData(id))
  }


  return (
    <>
    <div className="kanban-board">
      <div className="column todo" data-status="todo">
        <h2>To Do</h2>
        {toDo.map((data, index) => (
          <div className="todo taskBlock" key={index}>
            <h4>{data.title}</h4>
            {/* <div className="tasks" data-status="todo">{data.deSc}</div> */}
            <p className="tasks">{data.deSc}</p>
            <div className="dueDate">
              dueDate : {data.expDate?.split("T")[0]}
            </div>
            <div className="actions">
                <button onClick={()=>editHandleBtn(data._id)}>edit</button>
                <button onClick={()=>setDelId(data?._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="column in-progress" data-status="in-progress">
        <h2>In Progress</h2>
        {inProgress.map((data, index) => (
          <div className="inProgress taskBlock" key={index}>
            <h4>{data.title}</h4>
            <p className="tasks">{data.deSc}</p>
            <div className="dueDate">
              dueDate : {data.expDate?.split("T")[0]}
            </div>
            <div className="actions">
                <button onClick={()=>editHandleBtn(data._id)}>edit</button>
                <button onClick={()=>setDelId(data?._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="column done" data-status="done">
        <h2>Done</h2>
        {done.map((data, index) => (
          <div className="done taskBlock" key={index}>
            <h4>{data.title}</h4>
            <p className="tasks">{data.deSc}</p>
            <div className="dueDate">
              dueDate : {data.expDate?.split("T")[0]}
            </div>
            <div className="actions">
                <button onClick={()=>editHandleBtn(data._id)}>edit</button>
                <button onClick={()=>setDelId(data?._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <DeleteModal id={delId}/>
    </>
  );
}

export default CombanBoard;
