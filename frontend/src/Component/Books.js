import React , { useEffect, useState }  from 'react';
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom';
import { Table } from 'reactstrap';
import Bk from './Bk';


const Books = () => {

    
    const navigate = useNavigate();
    const [bookData,setBookData] = useState([])
    const [userId,SetUserId] =  useState(null)
    const [userdata,setUserdata] = useState({})
    const [query, setQuery] = useState(" ")

    async function getBooks(){

        const resp  = await fetch(`http://localhost:8989/book/${query}`)
        const data =  await resp.json()
        setBookData(data.books)
        
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
                console.log(user.user._id);
                SetUserId(user.user._id);
                setUserdata(user.user)
            }
            
        }else{
            navigate('/login')
        }
        
        
    
        },[])


        useEffect(()=>{
            getBooks()
        },[query])
        // console.log(bookData);
        let i =0
        const bookEle = bookData.map(book=>{
            i+=1
             return <Bk data = {book} key ={i} userid ={userId} admin={userdata.admin} />
            
            })
    
  return(
    <div className='records'>
        <div className="container sma">
        <div className="row">
            <div className="col-12-book">
            <h3 align="center" className='headingss'>All Books</h3>
            <div className="search">
            <input className='search-bar' placeholder="Search Book" onChange={event => setQuery(event.target.value)} />
            </div>
            <div className="contacts">
            {bookEle}   
            </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default Books;