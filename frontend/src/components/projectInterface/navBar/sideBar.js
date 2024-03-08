import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function SideBar({addEmployee}) {
  const navigate=useNavigate();
  const [userId , setUserId] = useState(Cookies.get("id"))

  // console.log(addEmployee);

  return (
    <>
      <div className="sideBar">
        <button>assign task</button>
        {addEmployee?<button>add New Employee</button>:null}
        <button onClick={()=>navigate(`/projectTasks/${userId}`)}>view my Task</button>
        <button>employees</button>
      </div>
    </>
  );
}

export default SideBar
