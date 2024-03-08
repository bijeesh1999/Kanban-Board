import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "./navBar/sideBar";
import Header from "./navBar/header";
import ProjectForm from "./projectModal/addProject";
import { getAllProject , getMatchedProject } from "../../redux/project/projectApi";
import DriveFileRenameOutlineSharpIcon from "@mui/icons-material/DriveFileRenameOutlineSharp";
import DeleteConfirm from "./projectModal/deleteModal";
import Cookies from "js-cookie";
import "./projects.css";

function ProjectPannel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id , setId] = useState('')
  const [addEmployee , setAddEmployee] = useState(false)
  const [projectId , setProjectId] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if(Cookies.get('token')){
      setId(Cookies.get('id'))
      dispatch(getMatchedProject(id));
    }else{
      navigate("/userLogin");
    }
  }, [id]);

  // console.log(id);
  const allProjects = useSelector((state) => state.project?.matchProjects);
  useEffect(() => {
    setProjects(allProjects);
    // console.log(allProjects);
    if(allProjects.length !== 0){
      setAddEmployee(true)
    }else{
      setAddEmployee(false)
    }
  }, [allProjects]);


  return (
    <div className="projectWraper">
      <Header />
      <SideBar addEmployee={addEmployee}/>
      <div className="projectContainer">
        <div className="addProjectBlock">
          <ProjectForm projectId={projectId} AddEmpBtn={setAddEmployee}/>
        </div>
        <div className="ProjectListingBlock">
          {projects?.map((project, index) => (
            <div className="project" key={index}>
              <div className="details" onClick={() => navigate(`/projectTasks/${project._id}`)}>
                <h3>{project?.project}</h3>
                <h4>projectId:{"h54kijj"}</h4>
              </div>
              <div className="actions">
                <DeleteConfirm idToDeleteProject={project._id}/>
                <DriveFileRenameOutlineSharpIcon onClick={()=>setProjectId(project._id)}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPannel;
