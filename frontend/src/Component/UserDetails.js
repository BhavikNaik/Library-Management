import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';

function UserDetail() {
  const navigate = useNavigate();
  


    

  const [data ,setData] = useState({
    name: '',
    email:'',
    phone:'',
    pass:''
  })
  const [name,setName] = useState('')
  const [pass,setPass] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [id,setId] = useState('')
  const [editName,setEditname] = useState(false)
  const [editPass,setEditpass] = useState(false)
  const [view,setView] = useState(0)

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const userdata = jwt.decode(token)
        if(!userdata){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            console.log(userdata);
            setData({
              name:userdata.user.name,
              email:userdata.user.email,
              phone:userdata.user.phone,
              pass:userdata.user.password,
              
            })
            setName(userdata.user.name)
            setPass(userdata.user.password)
            setEmail(userdata.user.email)
            setPhone(userdata.user.phone)
            setId(userdata.user._id)
        }
    }else{
        navigate('/login')
    }
},[])


async function saveChange(event){
  event.preventDefault()
  console.log(name,pass,email,phone);
  setEditname(false)
  setEditpass(false)
  const response= await fetch(`http://localhost:8989/user/${id}`,{
            method: 'PUT',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                name:name,
                email:email,
                password:pass,
                phone:phone
                
            })
          })

        const data = await response.json()
        if(data.response){
            console.log(data);
            alert("Changes will be seen after siging in again")
        }
        else{
          console.log(data);
          alert("Unable to change")
        }
}

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "pass"){
      setPass(value);
    }
  }
  // console.log(name, pass)
  console.log(editName);

return(
      <div className='records'>
        
            <div className="AddBkPg">
            
            <div className="formbody">
                
            <div className='formhead'>Details</div>
            

            <div className="form-body-user">
              <div className="inl">
                    
                <input 
                  className="form__input" 
                  disabled ={!editName}
                  onChange = {(e) => handleInputChange(e)} 
                  value={name} 
                  type="text" 
                  id="name" 
                />
                
              </div>
              <button  className='foote'
                onClick={editName?saveChange:()=>{setEditname(!editName)}} >
                {editName?'Save':'Edit'}
              </button>
              <div className="inl">
                    
                <input 
                  className="form__input" 
                  disabled={true}  
                  onChange = {(e) => handleInputChange(e)} 
                  value={phone} 
                  type="text" 
                  
                  placeholder='Image link'
                />
              </div>
              <div className="inl">
                    
                <input 
                  className="form__input" 
                  disabled={true}  
                  onChange = {(e) => handleInputChange(e)} 
                  value={email} 
                  type="text" 
                   
                  placeholder='Image link'
                />
              </div>
              <div className="inl">
                    
                <input 
                  disabled ={!editPass}
                  className="form__input"  
                  onChange = {(e) => handleInputChange(e)} 
                  value={pass} 
                  type={view?"text":"password"} 
                  id="pass" 
                />  
              </div>
              <div className='butCont'>
              <button  className='foote'  onClick={editPass?saveChange:()=>setEditpass(!editPass)} >{editPass?'Save':'Edit'}</button>
              <button className='foote' onClick={()=>{setView(!view)}} >View</button>

              </div>
              

            </div>
            
        
        </div>
            </div>
            </div>
        
        );
}

export default UserDetail;