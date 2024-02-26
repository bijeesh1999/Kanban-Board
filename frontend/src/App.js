import React from "react";
import "./App.css";
import { useState } from "react";
import { useFormik } from 'formik';
import {useDispatch, useSelector } from "react-redux";
import { postData } from "./redux/kanbanApi";
import CombanBoard from "./components/kombanBoard";

function App() {
  const dispatch=useDispatch();
  const [modal, setModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      deSc: '',
      option:'',
      expDate:''
    },
    onSubmit: values => {
        dispatch(postData(values))
    },
  })

  const singleData=useSelector((state)=>state.datas.singleData)


  console.log(singleData);


  

  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <div className="header-left">Kanban Board</div>
        <div className="header-right">
          <button id="add-task-btn" onClick={() => setModal(true)}>
            Add Task
          </button>
        </div>
      </header>


{/* task view Blocks */}

<CombanBoard />

      {/* Full-size Modal for Adding Tasks */}
      {modal ? (
        <div id="add-task-modal" class="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setModal(false)}>
              &times;
            </span>
            <h2>Add New Task</h2>

            {/* Inside the <div class="modal-content"> of your modal */}

            <form id="add-task-form">
              <input
                type="text"
                id="task-title"
                name="title"
                placeholder="Task Title"
                required
                onChange={formik.handleChange}
              />
              <textarea
                id="task-description"
                name="deSc"
                placeholder="Task Description"
                required
                onChange={formik.handleChange}
              ></textarea>
              <div className="optionBlock">
              <select id="column-select" name="option" onChange={formik.handleChange}>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <input type="date" name="expDate" className="date" value={''} onChange={formik.handleChange}/>
              </div>
              <button type="submit" onClick={formik.handleSubmit}>Add Task</button>
            </form>
          </div>
        </div>
      ) : null}

      <footer>
        <p>Kanban Board Application</p>
      </footer>
    </div>
  );
}

export default App;
