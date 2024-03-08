import React from "react";
import { useDispatch } from "react-redux";
import { deleteOneProject , getAllProject } from "../../../redux/project/projectApi";
import { deleteOneTask , getAllTask} from "../../../redux/task/taskApi";
import { deleteOneProgress, getAllProgress } from "../../../redux/progress/progressApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Space } from 'antd';
const { confirm } = Modal;


function DeleteConfirm(props) {
  const dispatch = useDispatch();

  const showPromiseConfirm = () => {
    confirm({
      title: 'Do you want to delete this {}',
      icon: <ExclamationCircleFilled />,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (props.idToDeleteProject) {
              dispatch(deleteOneProject(props.idToDeleteProject))
                .then(() => {
                  dispatch(getAllProject())
                  resolve();
                })
                .catch((error) => {
                  reject();
                });
            } else if(props.progressDeleteId){
              dispatch(deleteOneProgress(props.progressDeleteId))
              .then(()=>{
                dispatch(getAllProgress())
                reject();
              })
            }else if(props.deleteTask){
              dispatch(deleteOneTask(props.deleteTask))
              .then(()=>{
              dispatch(getAllTask())
                reject();
              })
            }else {
              reject();
            }
          }, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  return (
    <Space wrap>
      <DeleteIcon className="mui_Icon" onClick={showPromiseConfirm}  />
    </Space>
  );
}

export default DeleteConfirm;
