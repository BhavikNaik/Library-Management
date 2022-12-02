import React,{useState} from "react";

export default function Bk(props) {
    const {userid}= props
    const {admin} = props
    const {_id, image, name, author, category, quantity,available} = props.data;
    const [qunatData, setQuan] =  useState({
        quan: quantity,
        aval: available
    })
    // console.log(`Admin: ${admin}`);
    async  function issueBk(){
        
        const response= await fetch('http://localhost:8989/issue/isuueBook',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
              userId:userid,
              bookId:_id
            })
          })
          const data = await response.json()
        console.log(data);
        if(data.issue){
            console.log(qunatData.quan-1);
            let a= false
            if(qunatData.quan-1>0){
                a =  true
            }
            setQuan({
                quan:qunatData.quan-1,
                aval:a
            })
        }
    }
    
    return (
        <>
            <div className="contact-card">
                <img src={image} />
                <h3>{name}</h3>
                
                <div className="info-group">
                    <p>Author: {author}</p>
                </div>
                <div className="info-group">
                    <p>Category: {category}</p>
                </div>
                <div className="info-group">
                    <p>Copies {qunatData.quan}</p>
                </div>
                <button className="foote"
                    disabled={!qunatData.aval} 
                    onClick={issueBk} 
                >
                    {qunatData.aval?<>Issue book</>:<>Out of Stock</>}
                </button>
                
            </div>
        </>
        
    );
}
