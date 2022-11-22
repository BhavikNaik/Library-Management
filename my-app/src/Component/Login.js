import React, {useState} from 'react';
import './style.css'
import { NavLink } from './NavbarElements';

function LoginForm() {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit  = () => {
        console.log(email,password);
    }

    return(
        <div className="records">
        <div className="form2">
            <div className='headi'>Login Form</div>
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email: </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password: </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="d">
                <button onClick={()=>handleSubmit()} type="submit" class="btn foote">Login</button>
            </div><br />
            <div class="d1">Don't have an account?<NavLink to='/Register' activeStyle>Register</NavLink></div>
        </div>
        </div>
    )       
}

export default LoginForm