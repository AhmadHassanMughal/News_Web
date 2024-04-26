import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
// import "./register.css";
import "../styling/register.css";
import { Result } from "postcss";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleClick = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    axios.post('http://localhost:3005/register', user)  
    .then(result=> {
      console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  }

  useEffect(() => {
    setUser();
  }, []);

  console.log(user);

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen w-[100%]">
      <section className=" flex max-md:flex-col justify-around items-center  py-[50px] px-[40px] w-[40%] max-sm:w-full bg-white rounded-xl shadow-lg shadow-black">
        {/* <div className="registerImg">
          <img src="/assets/logo_mark.png" alt="" />
        </div> */}
        <div className="w-[90%] max-sm:w-full">
          <center>
            <div className="text-[3.5rem] font-[700]">Sign Up</div>

            <div className="text-gray-600">
              Welcome! please enter your details
            </div>
          </center>
          <form>
            <TextField
              className="registerInput"
              label="Username"
              fullWidth
              // value={email}
              name="username"
              onChange={handleClick}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              className="registerInput"
              label="Name"
              fullWidth
              type="text"
              name="name"
              // value={password}
              onChange={handleClick}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              className="registerInput"
              label="Email"
              fullWidth
              type="email"
              name="email"
              // value={password}
              onChange={handleClick}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              className="registerInput"
              label="Password"
              fullWidth
              type="password"
              name="password"
              // value={password}
              onChange={handleClick}
              margin="normal"
              variant="outlined"
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
            />
            
            
            <Button
              // href="/login"
              onClick={() => handleSubmit()}
              className="registerButton"
              variant="contained"
              color="primary"
              fullWidth
            >
              Create Account
            </Button>
          
            
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;