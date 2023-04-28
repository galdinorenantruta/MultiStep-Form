import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div>
     <div className='personal-info-container'>
      <input type='text' placeholder='First Name...'  value={formData.firstName} onChange={(event)=> setFormData({...formData, firstName: event.target.value})}/>
      <input type='text' placeholder='Last Name...'  value={formData.lastName} onChange={(event)=> setFormData({...formData, lastName: event.target.value})}/>
      <input type='text' placeholder='Username...'  value={formData.userName} onChange={(event)=> setFormData({...formData, userName: event.target.value})}/>
    </div>
    </div>
  )
}

export default PersonalInfo
