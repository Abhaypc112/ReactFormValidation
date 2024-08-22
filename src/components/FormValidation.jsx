import React, { useState } from 'react'
import './Form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap'

function FormValidation() {
  const initialValues={name:"",email:"",password:""}
  const [formValue,setFormValue]=useState(initialValues)
  const [error,setError]=useState({})
  const [sucess,setSucess]=useState(false)

  const userData=(event)=>{
    const {name,value}=event.target;
    setFormValue({...formValue,[name]:value})
  }
  const submitData=(e)=>{
    e.preventDefault()
    setError( validation())
    setSucess(true)
    // setFormValue({name:"",email:"",password:""})
  }
const validation=()=>{
  const errors={}
    if(!formValue.name){
      errors.name="Name is rerquird *"
    }if(!formValue.email){
      errors.email="Email is rerquird *"
    }if(!formValue.password){
      errors.password="Password is rerquird *"
  }else if(formValue.password.length < 4){
    errors.password="Password must 4 char *"
  }
  return errors;
}
  return (
   <div>
      <pre className='pre'>{JSON.stringify(formValue,undefined,2)}</pre>
      <div><h2  className='sucess'>{Object.keys(error).length===0 && sucess?"Login Sucess...✅":null}</h2></div>
     <div className='form'>
      <h3>Login Page</h3>
      <hr></hr>
      <form onSubmit={submitData}>
        <label style={{marginTop:"10px"}} htmlFor="nmae">Name</label>
        <Form.Control onChange={userData} name='name' type="text" value={formValue.name}/>
        <p>{error.name}</p>
        <label htmlFor="email">Email</label>
        <Form.Control onChange={userData} name='email' type="email" value={formValue.email}/>
        <p>{error.email}</p>
        <label htmlFor="password">Password</label>
        <Form.Control onChange={userData} name='password' type="password" value={formValue.password} />        
        <p>{error.password}</p>
        <Button type='submit' style={{marginTop:"10px"}}>Submit</Button>
      </form>
    </div>
   </div>
  )
}
export default FormValidation
