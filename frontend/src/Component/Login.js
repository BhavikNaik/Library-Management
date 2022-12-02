import React, {useState} from 'react';
import './style.css'
// import axios from 'axios';


import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    async function  handleSubmit(event){
        event.preventDefault()
        // const options = ;
        console.log(email,password);
        // let config = {
        //     headers: {
        //         'Content-type':"application/json"
        //     }
        //   }
        // const data =  JSON.stringify({
        //     email: email,
        //     password: password
        // })
        // console.log(data);
        // const response = await axios.post('http://localhost:8989/user/login',data,config)
        // const data2 = await response
        // console.log(data2.data.tokenid);

            // .then(res=>{
            //     localStorage.setItem('token',res.tokenid);
            //     console.log(res);
            // })
            // .catch(err=>{
            //     console.log(err);
            // })
        const response= await fetch('http://localhost:8989/user/login',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          })

        const data = await response.json()
        if(data.tokenid){
            localStorage.clear()
            localStorage.setItem('token',data.tokenid);
           
            console.log(data);
            navigate('/')
        }
        else{
            alert("Please check email and pass")
        }
        
    }

    return(
        <div className="backGrid">
        
        
           
            <form onSubmit={handleSubmit} >
        <div className="formBody">
        
            <div className='formhead'>Login</div>
            <center>Library Management System</center> 
                <div className="form-body">
                    <div className="email">
                        
                        <input  type="email" placeholder='Email' id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)}/>
                        
                    </div>
                    <div className="password">  
                        
                        <input className="form__input" placeholder='Password' type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} />
                    </div>
                    <div className="d">
                    <input type="submit" value="Login" className="form_but"/>
                    </div>
                </div>

            
            
            <div className="below_form">Don't have an account?<span className="Redirect" to='/Register' ><a href="/Register" className='Redirect'> Register now</a></span></div>
        </div>
            </form>
            </div>
      
        
      
        
    )       
}

export default LoginForm