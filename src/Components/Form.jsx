import React from 'react';
import { useState } from 'react';
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';

const Form = () => {
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign Up", "Personal Info", "Other Info"];
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
        firstName:"",
        lastName:"",
        userName:"",
        nationality:"",
        other:""
    });

    const PageDisplay = ()=>{
        if(page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData}/>
        }else if(page ===1){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        }else{
            return <OtherInfo formData={formData} setFormData={setFormData}/>
        }
    }

  return (
    <div className='form'>
      <div className='progressbar'>
        <div style={{width: page ===0? "33.3%" : page === 1? "66.6%" : "100%"}}></div>
      </div>
      <div className='form-container'>
        <div className='header'>
            <h1>{FormTitles[page]}</h1>
        </div>
        <div className='body'>
            {PageDisplay()}
        </div>
        <div className='footer'>
            <button
             disabled = {page === 0}
             onClick={()=>{setPage((currentPage)=>currentPage - 1)}}
            >prev</button>
            <button 
            
            onClick={()=>{
                if(page===FormTitles.length - 1){
                    alert("Form Subbmited")
                    console.log(formData)
                }else{setPage((currentPage)=>currentPage + 1)}}}
                
            >{page===FormTitles.length-1? "Submmit" : "Next"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form

