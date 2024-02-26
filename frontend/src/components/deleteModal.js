import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteSingleData, getAllData  } from "../redux/kanbanApi";
import "../App.css";

function DeleteModal({ id }) {
    // console.log(id);
  const dispatch = useDispatch();
  const [modal, setModal] = useState();
  useEffect(() => {
    if (id) {
      setModal(true);
    }
  }, [id]);

  const delSingleData = async () => {
    await dispatch(deleteSingleData(id));
    await dispatch(getAllData());
    setModal(false)
  };

  return (
    <>
      {modal === true ? (
        <div className="modalContainer">
        <div className="confirmBlock">
          <h1 style={{margin:"unset"}}>delete</h1>
          <p>do u want delete this task ?</p>
          <button onClick={delSingleData}>delete</button>
        </div>
        <div className="overlay"></div>
        </div>
            
      ) : null}
    </>
  );
}

export default DeleteModal;
