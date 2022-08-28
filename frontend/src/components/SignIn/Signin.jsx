import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "./CSS/style.css";


const Signin = () =>
{
const navigate = useNavigate();

    const [email_id,setEmail_id]=useState('');
    const [password,setPassword]=useState('');
    const loginUser = async (e)=>
    {
        e.preventDefault();
        const res= await fetch('/signin',
        {
            method:"POST",
            headers:{
                "Content-Type" :"application/json"
            },body:JSON.stringify({
                email_id,
                password
            })
        });

        const data=res.json();
        if(res.status===400 || !data)
        {
            window.alert('Invalid Credentials');
        }
        else 
        {
            window.alert('Login Successful');
            navigate('/Home');
        }

    }
    
    const [user,setUser]=useState({
        name:"",email_id:"",password:"",c_password:""
    });
    let name,value;
    const handleInputs= (e)=>
    {
        console.log(e);
        name=e.target.name;
        value= e.target.value;
        setUser({...user,[name]: value});

    }
    const [isContainerActive, setIsContainerActive] = React.useState(false);
    const signUpButton = () =>
    {
        setIsContainerActive(true);
    };  
    const signInButton = () => {
       setIsContainerActive(false);
    };

    const postData = async (e) =>
    {
        e.preventDefault();

        const { name, email_id, password, c_password } = user;

         const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email_id, password, c_password
            })
        });

        const data = await res.json();

        if (data.status === 422 || !data)
        {
            window.alert("Invalid Registeration");
            console.log('Invalid Registration');

        } else
        {
            window.alert("Registeration Successfull");
            console.log('Registration Successful');

            setIsContainerActive(false);

        }
        
    }
        
  
  return (
    <div className='tody'>
          <div id="container" className={`container ${isContainerActive ? "right-panel-active" : ""}`}>
    <div class="form-container sign-up-container">
        <form action="#">
            <div className='H1'>Create Account</div>
            <div class="social-container">
                <a id ="A" href="#" className="social"><i class="fab fa-facebook-f"></i></a>
                <a id ="A" href="#" className="social"><i class="fab fa-google-plus-g"></i></a>
                <a id ="A" href="#" className="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span id="Span">or use your email for registration</span>
           <input type="text" name="name" value ={user.name} onChange={handleInputs} placeholder="Name" />
           <input type="email" name="email_id" value={user.email_id} onChange={handleInputs} placeholder="Email" />
           <input type="password" name="password" value={ user.password } onChange={handleInputs} placeholder="Password" />
           <input type="password" name = "c_password" value={user.c_password} onChange={handleInputs} placeholder=" Confirm Password" />

            <button onClick={postData}>Sign Up</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form method ="POST" action="#">
            <div className='H1'>Sign in</div>
            <div class="social-container">
                <a id ="A" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a id ="A" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a id ="A" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span id="Span">or use your account</span>
            <input type="email" 
            value ={email_id}
            onChange ={(e)=>setEmail_id(e.target.value)}
            placeholder="Email" />
            <input type="password" 
            value ={password}
            onChange ={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
            <a id ="A" href="#">Forgot your password?</a>
            <button onClick={loginUser}>Sign In</button>
        </form>
    </div>
    <div className="overlay-container">
        <div className="overlay">
            <div className="overlay-panel overlay-left">
                <div className='H1'>Welcome Back!</div>
                <p id="P">To keep connected with us please login with your personal info</p>
                <button onClick={signInButton} className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
                <div className='H1'>Hello, Friend!</div>
                <p id="P">Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={signUpButton}>Sign Up</button>
            </div>
        </div>
    </div>
</div>
         
      </div>)
}

export default Signin;