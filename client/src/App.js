import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./layout/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div>
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/home" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/addUser" element={<AddUser/>}/>
            <Route path="/editUser/*" element={<EditUser/>}/>
            <Route path="/viewUser/*" element={<ViewUser/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
