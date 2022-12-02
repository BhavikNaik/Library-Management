import React , { useEffect, useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken'

function Home() {

    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate();
    async function pathChange(path){
        navigate(`/${path}`)
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
            if(user.user.admin==true){
                setAdmin(true)
            }
            
        }
    }else{
        navigate('/login')
    }
},[])

    return(
        <>
          <div className="container mt-4 home text-center align-self-center">
        <br/><br/>
            <div className="row mt-3 darkbg text-center justify-content-center ko">
            <h1 style={{fontSize:"3rem",fontWeight:'600'}}> Welcome to the Library</h1>
            </div>
            <div className="row darkbg justify-content-center">
            
            <div className="row mt-3 darkbg text-center justify-content-center koo">
            Visit your library, get your library card, and you’ll be able to borrow a book, use free internet, or attend a course that will improve your digital skills.
            </div><br/><br/>
            <table className='tabla'>
                <tr> <th colspan="2">Library Timings</th> </tr>
                <tr> <td>Working Hours</td> 
                <td> 9 am - 5 pm</td></tr>
                <tr> <td>Working Days </td> 
                <td> Mon - Sat</td></tr>
            </table><br/>
                
                </div>
                
                <br/><br/><br/>
            </div>
            
        </>
        );
}

export default Home;