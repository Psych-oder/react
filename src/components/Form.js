import React, { useState, useEffect } from 'react'

export default function Form(props) {
   let getitem = ()=>{
    let item = JSON.parse(localStorage.getItem("cruddata"));
    if(item){
        return item
    }else {
        return []
    }
   }

     const [data ,setdata] =useState(getitem())
      const [name, setname] = useState('');
      const [email, setemail] = useState('');
      const [PhoneNumber, setNumber] = useState('');
      
      console.log(props.edit)
       if(props.edit){
        setname(props.edit.name)
        setemail(props.edit.email)
        setNumber(props.edit.PhoneNumber) ; 
        
       }
      const submitdata = (e) =>{
        e.preventDefault();
       if( props.edit){
            
      setdata(data.map((elem) => {
        if (elem === props.edit) {
           return { ...elem, email,  name ,PhoneNumber }
        }
        return elem
      }))

         
       }
       else{
        let user= {
          name ,email,PhoneNumber 
      } 
      localStorage.setItem("cruddata" , JSON.stringify([...data , user]));
             
            props.add(false) 
       }   
      }
     
   let resetform =(e)=>{
    e.preventDefault();
     Form.clear();
   }
      
      return (
       
      
          
          <div className='form  w-75  m-auto bg-white'>
              <div className='form-container m-2 border'  style={{float:"left" ,width:"100%"}}>
              <h3 className='text-center'>Add Contact</h3>
              <form onSubmit={submitdata}  onReset={resetform}className='mainform'>
                <label>Name:</label>
                <input type="text" className='form-control' required
                  onChange={(e) => setname(e.target.value)} value={name}></input>
               
                <label>Email:</label>
                <input type="text" className='form-control' required
                  onChange={(e) => setemail(e.target.value)} value={email}></input>
                
                <label>PhoneNumber:</label>
                <input type="text" className='form-control' required
                  onChange={(e) => setNumber(e.target.value)} value={PhoneNumber}></input>
                  
                <input  type="submit" className='btn btn-primary btn-md' value="submit" />
                <input  type="reset" className='btn btn-primary btn-md' value="reset"  />
                  
                 
              </form>
            </div>
    
    
       
        </div>
      )
    }


