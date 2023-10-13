import React,{useState} from 'react'

export default function Agecalculator() {
    const [birth,setBirth]=useState('');
    const [age,setAge]=useState(0);
    const calculateAge = () => {
        const today = new Date();
        const birthdate = new Date(birth);
 
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        setAge(age);}
    const handleOnChange=(event)=>{
        setBirth(event.target.value);
    };
  return (
    <>
    <div className='container my-5 border shadow w-50'>
    <h1 className='text-dark text-center'>Age Calculator</h1>
    <div className="input my-3">
        <h5 className='text-center'>Enter your date of birth </h5></div>
    <div className='inputtag text-center mb-3'>
        <input  className='w-50' type="date" name="myname" id="fordate" onChange={handleOnChange} style={{height:"40px"}} /></div>
    <div className="text-center mb-3">
        <button className='btn btn-primary' onClick={calculateAge}>Calculate Age</button>
    </div>
    <div className="output text-center h5 m-3">
        Your Age is: <h5 className='text-danger d-inline'>{age > 0 ? `${age}` : ''}</h5> years old
    </div>
    </div>
   
</>
  )
}
