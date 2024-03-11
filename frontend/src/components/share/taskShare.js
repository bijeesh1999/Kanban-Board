import React, { useEffect, useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../../redux/users/userApi';
import { postAssignedTask } from '../../redux/taskShare/shareTaskApi';
import { useFormik } from 'formik';
import { Button, Modal } from 'antd';
import "./taskshare.css"

const ShareTask = ({taskId , projectId}) => {
    const dispatch=useDispatch();
  const [open, setOpen] = useState(false);

  const users = useSelector((state)=>state.user.users)

  useEffect(()=>{
    dispatch(allUsers())
  },[])



  const selectedTask = (id) =>{
    console.log(id);
    setOpen(true)
    formik.setFieldValue('taskId', id);
    formik.setFieldValue('projectId', projectId);
  }

  const formik = useFormik({
    initialValues:{
      empId:"",
    },
    onSubmit: values =>{
      dispatch(postAssignedTask(values))
      setOpen(false)
    }})


  return (
    <>
      <ShareIcon style={{cursor:"pointer"}} onClick={() => selectedTask(taskId)}/>
      <Modal
        open={open}
        onOk={formik.handleSubmit}
        onCancel={() => setOpen(false)}
        width={750}
        className='shareTaskModal'
      >
        <div className='head'>
            <h3>share Task</h3>
            <button>create Employees</button>
        </div>
        {users.map((user , index)=>(
          <div className='taskAssign' key={index}> 
            <input type='radio' name='empId' className='taskRadio'onChange={formik.handleChange} value={user._id} />
            <h5>{user.emailId}</h5>
            <h5>{user.userName}</h5>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default ShareTask;