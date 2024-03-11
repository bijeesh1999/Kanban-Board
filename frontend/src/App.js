import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectPannel from "./components/projectInterface/projects";
import CanbanBoard from "./components/parentComponents/canbanBoard";
import UserLogin from "./components/admnAnduser/userLogin";
import AdminLogin from "./components/admnAnduser/adminLogin";
import ViewMyTask from "./components/getMyTasks/myTasks";
import "./App.css";


function App() {
  return (

    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<ProjectPannel />} />
        <Route path="/projectTasks/:id" element = {<CanbanBoard />} />
        <Route path="/assingnedTasks" element={<ViewMyTask />} />
        <Route path="/userLogin" element={<UserLogin />}/>
        <Route path="/adminLogin" element={<AdminLogin />}/>

      {/* </Route> */}
    </Routes>
  </BrowserRouter>

  );
}

export default App;
