import React, { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getAllAssignedTasks } from "../../redux/taskShare/shareTaskApi";
import Header from "../projectInterface/navBar/header";
import "./myTasks.css";

function ViewMyTask() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId , setUserId] = useState(Cookies.get("id"))

    const myTasks = useSelector((state)=>state.share?.allAssigned)


    useEffect(()=>{
        dispatch(getAllAssignedTasks(userId))
    },[userId])


    console.log(userId);

  return (
    <div className="myTaskContainer">
      <Header />
      <h2>My Tasks</h2>
      <div className="tasksBlock">
        <table>
          <thead className="tableHead">
            <th>no</th>
            <th>TaskId</th>
            <th>Date</th>
          </thead>
          <tbody>
            {myTasks.map((task , index)=>(
          <tr className="valueField" onClick={()=>navigate(`/projectTasks/${task._id}`)}>
            <td>{index + 1}</td>
            <td>{task.projectId}</td>
            <td>{task.createdAt}</td>
          </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewMyTask;
