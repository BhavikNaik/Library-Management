import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function AddBook() {
    const navigate = useNavigate();
    const [imgLink, setImgLink] = useState('');
    const [BName, setBName] = useState('');
    const [AName, setAName] = useState('');
    const [desription, setDesription] = useState('');
    const [Cat,setCat] = useState('');
    const [quantity,setQuantity] = useState('');

    async function addbk(event) {
        event.preventDefault()
        console.log(imgLink,BName,AName,desription,Cat,quantity);
        
        const response= await fetch('http://localhost:8989/book/addBook',{
            method: 'POST',
            headers:{
                'Content-type':"application/json"
            },
            body: JSON.stringify({
                image:imgLink,
                name:BName,
                author:AName,
                description:desription,
                category:Cat,
                quantity:quantity
            })
          })

        const data = await response.json()
        if(data){
            console.log(data);
            alert("book added")
        }
        else{
            alert("book Not added")
        }
    }

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "imgLink"){
            setImgLink(value);
        }
        if(id === "BName"){
            setBName(value);
        }
        if(id === "AName"){
            setAName(value);
        }
        if(id === "desription"){
            setDesription(value);
        }
        if(id === "Cat"){
            setCat(value);
        }
        if(id === "quantity"){
            setQuantity(value);
        }


        
    }

    

 return (
    
    <div className='AddBkPg'>
        <div className="BookFormbody">
            <div className='AddBkformhead'>Add Book</div><br/>
            <form>

            <div className="form-body">
                <div className="inl">
                    
                    <input className="form__input"  onChange = {(e) => handleInputChange(e)} value={imgLink} type="text" id="imgLink" placeholder='Image link'/>
                </div>
                <div className="inl">
                    
                    <input className="form__input" onChange = {(e) => handleInputChange(e)} value={BName} type="text" id="BName" placeholder='Book Name'/>
                </div>
                <div className="inl">
                    
                    <input  type="text" name="" onChange = {(e) => handleInputChange(e)} id="AName" value={AName} className="form__input" placeholder='Author name'/>
                </div>
                <div className="inl">
                   
                    <input type="text"  className="form__input" placeholder='Description' onChange = {(e) => handleInputChange(e)} name="" value={desription} id="desription" cols="50" rows="5"></input >
                </div>
                <div className="inl">
                    
                    <input className="form__input" placeholder='Category' onChange = {(e) => handleInputChange(e)} type="text" value={Cat} id="Cat"/>
                </div>
                <div className="inl">
                    
                    <input  type="number" value={quantity} placeholder='Quantity' onChange = {(e) => handleInputChange(e)} step="1" min={0} name="" id="quantity" className="form__input"/>
                </div><br/>
            </div>
                <div className="d">
                    <input type="submit" onClick={addbk} value="Add" className="form_but"/>
                </div>
            </form>
            
        </div>
    </div>
 );
}

export default AddBook;