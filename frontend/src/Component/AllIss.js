import React, { useEffect, useState } from "react";

export default function AllIss(props){
    const userData= props.data.user
    const bookData= props.data.book;
    
    const {issueDate,returned,dueDate,_id} = props.data;
    const issDate = issueDate.split('T')[0]
    const dDate = dueDate.split('T')[0]
    const[returnCheck,setRtnChk] = useState(returned)
    async  function issueBk(){
        const resp  = await fetch(`http://localhost:8989/issue/retBook/${_id}`)
        const data =  await resp.json()
        console.log(data)
        if(data.check.modifiedCount>0){
            setRtnChk(true)
        }
    }
    return(
        <>
            <div className="contact-card-second">  
                <img src={bookData.image}/>
                <div className="contact-data">
                    <h4>Name: {userData.name}</h4>
                    <h4>Book: {bookData.name}</h4>
                    <h5>Issue Date: {issDate}</h5>
                    <h5>Due Date: {dDate}</h5>
                </div>
                <h5>{returnCheck?
                    <><button className="retBut" disabled={true} >Returned</button></>
                    :
                    <><button className="retBut" onClick={issueBk} >Book return</button></>
                }</h5>
                
            </div>
        
        </>
    )
    }
