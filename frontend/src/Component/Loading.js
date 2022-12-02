import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import AllIss from './AllIss';

function Log() {
    const navigate = useNavigate();
    const [userd,setUserd] = useState('')
    const [click,setClick] = useState(false)
    const [issues,setIssues] = useState([])
    async function getisss(){

        const resp  = await fetch("http://localhost:8989/issue/getIss")
        const data =  await resp.json()
        setIssues(data.issue)
        // console.log(data.issue);
        // const d = data.issue;
        // d.map(b=> console.log(b))
    }

    useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        const user = jwt.decode(token)
        if(!user){
            localStorage.removeItem('token')
            navigate('/login')
        }
        else{
            if(!user.user.admin){
                alert('only admin can access')
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                setUserd(user.user._id)
            }
            
        }
    }else{
        navigate('/login')
    }
    

    

    },[])

    useEffect(()=>{
        if(userd){

            getisss()
        }
        
    },[userd,click])
    let i =0
    const issElelement = issues.map(iss=>{
        i+=1
        return((click === iss.returned) &&  <AllIss data = {iss} key ={i} />)
        
        })
    
    

        return(
        <div className='records'>
            <div className="mt-6 text-center align-self-center full">
                <div className="row text-center justify-content-center">
                <div className="hisPg">
                <br /><br /><h3 className='headingss'>Issue Log</h3>
                <button  onClick = {()=>{setClick(!click)}} className={click?'pendingBut_Clicked':'pendingBut'}>{!click?'Pending':'Returned'}</button>
                <div className="contacts-i">
                {issElelement}
                </div>
                </div>
                </div>
                </div>
            </div>
        );
}

export default Log;