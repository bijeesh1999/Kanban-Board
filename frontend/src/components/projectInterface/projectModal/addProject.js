import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import {postProject,getMatchedProject,getOneProject,putOneProject} from "../../../redux/project/projectApi";
import { useFormik } from "formik";
import cookie from "js-cookie";
import "./modal.css";

const ProjectForm = ({ projectId , AddEmpBtn}) => {
  const dispatch = useDispatch();
  const [editBtn, setEditBtn] = useState(false);
  const [id, setId] = useState(cookie.get("id"));
  const [open, setOpen] = useState(false);

  const singleProject = useSelector((state) => state.project?.singleProject);

  const formik = useFormik({
    initialValues: {
      project: "",
      desc: "",
      role: "owner",
      ownerId: id,
    },
    onSubmit: async (values) => {
        if(!projectId){
            await dispatch(postProject(values));
            await dispatch(getMatchedProject(id));
            AddEmpBtn(true)
            formik.resetForm();
            setOpen(false);
        }else{
            await dispatch(putOneProject({values ,id:projectId}))
            await dispatch(getMatchedProject(id));
            formik.resetForm();
            setOpen(false);
        }
    },
  });

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    formik.resetForm()
    setEditBtn(false)
  };

  useEffect(() => {
    if (projectId) {
      dispatch(getOneProject(projectId));
      showModal();
      setEditBtn(true)
    }
  }, [projectId]);

  useEffect(() => {
    if (singleProject.length !== 0) {
      formik.setValues({
        project: singleProject?.project,
        desc: singleProject?.desc,
      });
    }
  }, [singleProject]);





  return (
    <>
      <Button className="addProject" onClick={showModal}>
        +
      </Button>
      <Modal open={open} title="Title" onCancel={handleCancel} footer={null}>
        <div className="formModal">
          <form onSubmit={formik.handleSubmit}>
            <input
              name="project"
              id="project"
              value={formik.values.project}
              onChange={formik.handleChange}
            />
            <textarea
              name="desc"
              id="desc"
              value={formik.values.desc}
              onChange={formik.handleChange}
            />
            <div className="buttonCollection">
              {editBtn ? (
                <button type="submit" className="formSubmit" >
                  edit
                </button>
              ) : (
                <button type="submit" className="formSubmit">
                  submit
                </button>
              )}
            </div>
          </form>
          <button onClick={handleCancel} className="cancelModal">
            cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProjectForm;
