import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask, putOneTask, postTask } from "../../redux/task/taskApi";


import { useFormik } from "formik";

function Form({ setModal, editBtn, singleData, progreses , id , adminId }) {
  const dispatch = useDispatch();

  console.log(id);
  const formik = useFormik({
    initialValues: {
      title: "",
      deSc: "",
      option: "",
      expDate: "",
    },
    onSubmit: async (values) => {
      await dispatch(postTask(values,values.projectId=id,values.adminId=adminId));
      await dispatch(getAllTask());
      setModal(false);
    },
  });

  const handleModal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (singleData) {
      formik.setValues({
        title: singleData.title,
        deSc: singleData.deSc,
        option: singleData.option,
        expDate: singleData.expDate,
      });
    }
  }, [singleData]);

  console.log(formik.values);

  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(putOneTask({ editData: formik.values, id: singleData._id }));
    await dispatch(getAllTask());
    setModal(false);
  };

  return (
    <>
      <div id="add-task-modal" className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={handleModal}>
            &times;
          </span>
          <h2>Add New Task</h2>
          <form id="add-task-form">
            <input
              type="text"
              id="task-title"
              name="title"
              placeholder="Task Title"
              value={formik.values.title}
              required
              onChange={formik.handleChange}
            />
            <textarea
              id="task-description"
              name="deSc"
              placeholder="Task Description"
              required
              value={formik.values.deSc}
              onChange={formik.handleChange}
            ></textarea>
            <div className="optionBlock">
              <select
                id="column-select"
                name="option"
                value={formik.values.option}
                onChange={formik.handleChange}
              >
                <option value={""}>seledt one</option>
                {progreses.map((data, index) => (
                  <option value={data?._id} key={index}>
                    {data?.status}
                  </option>
                ))}
              </select>
              <input
                type="date"
                name="expDate"
                value={formik.values?.expDate?.split("T")[0]}
                className="date"
                onChange={formik.handleChange}
              />
            </div>
            {editBtn ? (
              <button type="submit" className="editBtn" onClick={handleEdit}>
                edit
              </button>
            ) : (
              <button type="submit" onClick={formik.handleSubmit}>
                Add Task
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
