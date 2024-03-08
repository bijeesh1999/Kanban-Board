const {
    getAllProjectsService,
    postProjectService,
    putOneProjectService,
    deleteOneProjectService,
    getOneProjectService,
    getFilterDataService
  } = require("./projectService");
  
  const getAllProjects = async (req, res) => {
    try {
      const allProjects = await getAllProjectsService();
      res.status(200).json(allProjects);
    } catch (error) {
      res.status(400).json("no data found");
    }
  };


  const getFilterDataById = async (req,res) => {
    try {
      const {id} = req.params;
      const matchedProjects = await getFilterDataService(id)
      res.status(200).json(matchedProjects);
    } catch (error) {
      res.status(400).json(error)
    }
  }


  
  const postProject = async (req, res) => {
    try {
      const { ...data } = req.body;
      const postProjectResult = await postProjectService(data);
      res.status(200).json(postProjectResult);
    } catch (error) {
      res.status(400).json("data not posted");
    }
  };
  
  const putOneProject = async (req, res) => {
    try {
      const { id } = req.params;
      const { ...data } = req.body;
      const editedProject = await putOneProjectService(id, data);
      res.status(200).json(editedProject);
    } catch (error) {
      res.status(400).json("update is failed");
    }
  };
  
  const deleteOneProject = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProject = await deleteOneProjectService(id);
      res.status(200).json(deleteProject);
    } catch (error) {
      res.status(400).json("delete failed");
    }
  };
  
  const getOneProject = async (req, res) => {
    try {
      const { id } = req.params;
      const singleProject = await getOneProjectService(id);
      res.status(200).json(singleProject);
    } catch (error) {
      res.status(400).json("not found");
    }
  };
  
  module.exports = {
    getAllProjects,
    postProject,
    putOneProject,
    deleteOneProject,
    getOneProject,
    getFilterDataById
  };
  