import React, {useState,useEffect} from 'react';

import './style.css';
// import { Route } from 'react-router-dom';
import { NavLink } from './NavbarElements';

import { useNavigate } from 'react-router-dom';

function RegistrationForm() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState(null);
    const [phoneNo, setPhoneNo] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(0)
    useEffect(() => {
        document.body.classList.toggle("body-noscroll-class");
      }, [error]);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "phoneNo"){
            setPhoneNo(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    async function handleSubmit(event) {
        console.log(firstName,phoneNo,email,password,confirmPassword);
        event.preventDefault()
        if(password!==confirmPassword){
            alert("Wrong Password")
            return false
        }
        // const options = ;
        console.log(email,phoneNo,password);
        const response= await fetch('http://localhost:8989/user/register',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                name:firstName,
                email: email,
                password: password,
                phone: phoneNo
            })
          })

        const data = await response.json()
        console.log(data)
        if(data.tokenid){
            localStorage.clear()
            localStorage.setItem('token',data.tokenid);
            alert("Registered")
            navigate('/')
        }
        else{
            alert("Check Sign up credentials")
        }
    }

    return(
        <div className="backGrid">
            
      
        <form onSubmit={handleSubmit}> 
        <div className="formBody">
        
            <div className='formhead'>Sign Up</div>
            <center>Library Management System</center> 
            <div className="form-body">
                <div className="username">
                    
                    <input className="form__input w3-input w3-border w3-light-grey" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    
                    <input  type="text" name="" id="phoneNo" value={phoneNo}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="Last Name"/>
                </div>
                <div className="email">
                    
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <div className="d">
                    <input type="submit" value="Register" class="form_but"/>
                </div>
            </div>
            {/* <div class="d">
                <button onClick={()=>handleSubmit()} type="submit" class="btn foote">Register</button>
            </div> */}
            <br />
            <div class="below_form">Already have an account?<span  ><a href="/Login" className='Redirect'> Login</a></span></div>
        </div>
        </form>
        </div>
    )       
}

export default RegistrationForm