const project = require("../../dataBase/model/projectSchema");

const getAllProjectsService = async () => {
  try {
    return await project.find();
  } catch (error) {
    return error;
  }
};


const getFilterDataService = async (id) => {
  console.log("serviceId",id);
  try {
    const matchProject = project.aggregate(
      [ { $match : { ownerId : id } } ]
  );
  return(matchProject)
  } catch (error) {
    return error;
  }
}





const postProjectService = async (data) => {
  try {
    return await project.create(data);
  } catch (error) {
    throw error;
  }
};

const putOneProjectService = async (id, data) => {
  try {
    return await project.findByIdAndUpdate(id, data);
  } catch (error) {
    throw error;
  }
};

const deleteOneProjectService = async (id) => {
  try {
    return await project.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

const getOneProjectService = async (id) => {
  try {
    return await project.findById(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProjectsService,
  postProjectService,
  putOneProjectService,
  deleteOneProjectService,
  getOneProjectService,
  getFilterDataService
};
