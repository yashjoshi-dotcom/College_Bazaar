import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/style.css";
import { useAuth } from "../../Contexts/AuthContext";

const Signin = () => {
  const navigate = useNavigate();
  const  {
    authUser,
    setAuthUser,
    isloggedin,
    setIsloggedin
} = useAuth();
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 200 && data) {
      window.alert("Login Successful");
      navigate("/profile");
    }
    else if(res.status === 403)
    {
      window.alert("Invalid Credentials");
    }
     else {
      window.alert(" Uhh! We are experiencing some problems with our Server.");
    }
    ///
    setIsloggedin(true);
    setAuthUser(null);
  };

  const [user, setUser] = useState({
    name: "",
    email_id: "",
    password: "",
    c_password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const [isContainerActive, setIsContainerActive] = React.useState(false);
  const signUpButton = () => {
    setIsContainerActive(true);
  };
  const signInButton = () => {
    setIsContainerActive(false);
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email_id, password, c_password } = user;
    var domain = email_id.substring(email_id.lastIndexOf("@") +1);
    if(domain!='dtu.ac.in')
    {
      return alert("Only DTU institutional email ID's allowed.");
    }
    if(password!=c_password)
    {
      return alert("Passwords does not match  "); 
    }

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email_id,
        password,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registeration");
      console.log("Invalid Registration");
    } 
    else if (data.status === 400 || !data) {
      window.alert("Only DTU institutional email ID's allowed");
    } 
    else if (data.status === 404 || !data) {
      window.alert("Issue Encountered");
    } 
    else {
       {
        window.alert("Registeration Successfull");
        console.log("Registration Successful");       
        setIsContainerActive(false);
   
      }
    }
  };

  return (
    <div className="tody">
      <div
        id="container"
        className={`container ${isContainerActive ? "right-panel-active" : ""}`}
      >
        <div class="form-container sign-up-container">
          <form action="#">
            <div className="H1">Create Account</div>

            <span id="Span">Use your @dtu.ac.in email for registration</span>
            <input
              type="text"
              name="name"
              value={user.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputs}
              placeholder="Name"
            />
            <input
              type="email"
              name="email_id"
              value={user.email_id}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputs}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={user.password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputs}
              placeholder="Password"
            />
            <input
              type="password"
              name="c_password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={user.c_password}
              onChange={handleInputs}
              placeholder=" Confirm Password"
            />

            <button className="butt" onClick={postData}>
              Sign Up
            </button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form method="POST" action="#">
            <div className="H1 ">Sign in</div>

            <span id="Span" className="pb-5">
              Use your @dtu.ac.in account
            </span>
            <input
              type="email"
              value={email_id}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setEmail_id(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <a id="A" href="#">
              Forgot your password?
            </a>
            <button onClick={loginUser} className="butt signinbutton">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <div className="H1">Welcome Back!</div>
              <p id="P">
                To keep connected with us please login with your personal info
              </p>
              <button
                type="button"
                onClick={signInButton}
                id="signIn"
                className="ghost butt focus:outline-none mx-auto  text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="H1">Hello, Friend!</div>
              <p id="P">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost butt focus:outline-none mx-auto  text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                id="signUp"
                onClick={signUpButton}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
