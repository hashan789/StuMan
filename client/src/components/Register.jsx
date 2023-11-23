import axios from "axios";
import { useState } from "react";

function Register() {

      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
   
      async function save(event){
        
       event.preventDefault();
   
       try{
            await axios.post("http://localhost:8090/api/v1/user/save",{
               username: username,
               email: email,
               password: password
            });
            alert("Student Registration Successfully");
       }
       catch(err){
           alert(err);
       }
      }
   
       return (
         <div>
           <div>
               <div className="card">
                   <form action="">
                       <div className="form group">
                           <label htmlFor="">Username</label>
                           <input type="text" className="form-control"
                           value={username}
                           onChange={(event) => {
                               setUsername(event.target.value)
                           }}
                           name="" id="username" placeholder="Enter Name"/>
                       </div>
   
                       <div className="form group">
                           <label htmlFor="">Email</label>
                           <input type="text" className="form-control"
                           value={email}
                           onChange={(event) => {
                               setEmail(event.target.value)
                           }}
                           name="" id="email" placeholder="Enter Email"/>
                       </div>
   
                       <div className="form group">
                           <label htmlFor="">Password</label>
                           <input type="password" className="form-control"
                           value={password}
                           onChange={(event) => {
                               setPassword(event.target.value)
                           }}
                           name="" id="password" placeholder="Enter Password"/>
                       </div>
   
                       <button type="submit" onClick={(e) => save(e)}>Submit</button>
                   </form>
               </div>            
           </div>
         </div>
       );
  }
  
  export default Register;
  