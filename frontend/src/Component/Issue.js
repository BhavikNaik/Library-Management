import React,{useState} from "react";

export default function Issue(props){
    const userData= props.data.user
    const bookData= props.data.book;
    
    const{issueDate,returned,dueDate,_id} = props.data
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
            <div className="contact-card-inverse">
                <img src={bookData.image}/>
                <div className="contact-data">
                    <h2>{bookData.name}</h2>
                    <h3>Issue Date: {issDate}</h3>
                    <h3>Due Date: {dDate}</h3>
                </div>
                <h3>{returnCheck?
                    <><button className="foote" disabled={true} >Returned</button></>
                    :
                    <><button className="foote" onClick={issueBk} >Book Return</button></>
                }</h3>
                
            </div>
        
        </>
    )
    }