import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event){

        event.preventDefault();

        try{
           await axios.post("http://localhost:8090/api/v1/user/login",{
             email: email,
             password: password,
           }).then((res) => 
              {
                console.log(res.data);
                if(res.data.message == "Email not exists"){
                    alert("Email not exist");
                }
                else if(res.data.message == "Login Success"){
                    navigate('/home');
                }
                else{
                    alert("Incorrect Email and Password not match");
                }
              }, fail => {
                console.error(fail);
              }
           );
           
        }
        catch(err){
            alert(err);

        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h2>Login</h2>
                </div>
            </div>

            <div className="row">
                <div className="col sm-6">
                    <form action="">
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
                           <input type="text" className="form-control"
                           value={password}
                           onChange={(event) => {
                               setPassword(event.target.value)
                           }}
                           name="" id="password" placeholder="Enter Password"/>
                       </div>

                       <button type="submit" onClick={(e) => login(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

  }
  
  export default Login;
  