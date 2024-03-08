import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {postProgress,getAllProgress,putOneProgress} from "../../redux/progress/progressApi";
import "../components.css";

function AddProgress(props) {
  const [btn, setBtn] = useState(false);
  const [id, setId] = useState("");

  console.log(props);
  console.log(id);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      status: "",
      projectId:props.id,
      adminId:props.adminId
    },
    onSubmit: async (values) => {
      if (!id) {
        await dispatch(postProgress(values));
        dispatch(getAllProgress());
        props.setProgress(false);
      } else {
        await dispatch(putOneProgress({ values, id }));
        dispatch(getAllProgress());
        props.setProgress(false);
      }
    },
  });
  useEffect(() => {
    if (props.oneProgress) {
      setBtn(true);
      formik.setValues({
        status: props.oneProgress?.status,
      });
      setId(props.oneProgress?._id);
    }
  }, [props]);

console.log(formik.values);

  return (
    <>
      <div className="progressBlock">
        <div className="modalContainer"></div>
        <form className="progerssForm">
          <div className="formHeader">
            <h4>addPrgress</h4>
            <button className="close" onClick={() => props.setProgress(false)}>
              X
            </button>
          </div>
          <div className="inputs">
            <input
              type="text"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
            />
          </div>
          <div className="buttons">
            {btn ? (
              <button
                className="button"
                type="submit"
                onClick={formik.handleSubmit}
              >
                edit
              </button>
            ) : (
              <button
                className="button"
                type="submit"
                onClick={formik.handleSubmit}
              >
                save
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProgress;
