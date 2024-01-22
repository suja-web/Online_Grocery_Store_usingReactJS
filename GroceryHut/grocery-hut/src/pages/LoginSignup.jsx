import { useState } from "react"
import './css//LoginSignup.css'

const LoginSignup = ()=>{
    const [profile,setProfile] = useState({
        name:'',
        age: 0,
        mobileNo:''

    })

    const [isSubmitted,setIsSubmitted] = useState(false)

    //Event handler to handle change event of input
    const handleNameChange = (event)=>{
        //console.log("name is changed from previous to current  "+ event.target.value)
        //...profile is spread operator to copy previous value object
        setProfile({...profile,name:event.target.value})
    }
    const handleAgeChange = (event)=>{
        setProfile({...profile,age:event.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        alert("Form Submitted")
        setIsSubmitted(true)
    }
    const handleMobileNoChange = (e)=>{
        setProfile({...profile,mobileNo:e.target.value})
    }
    const handleEmailIdChange = (e)=>{
        setProfile({...profile,emailId:e.target.value})
    }

    return(
        <>
       
        { !isSubmitted && <div className="loginsignup">
            <h2 className="loginsignup-container">Registration</h2>
            <form  action="#" onSubmit={handleSubmit}>
                <div className="full-name">
                    <label className="loginsignup-fields">Full Name:</label>
                        <input size="20" className="form-control" value={profile.name} onChange={handleNameChange}  required/>
                    
                </div>
                <div className="age">
                    <label className="loginsignup-fields">Age  :</label>
                        <input size="20" className="form-control" value={profile.age} type="number" onChange={handleAgeChange} required min="18" max="23"/>
                
                </div>
                <div className="mobile">
                    <label className="loginsignup-fields">Mobile No. :</label>
                        <input  size="20"className="form-control" value={profile.mobileNo} type="tel" onChange={handleMobileNoChange} required pattern="[0-9]{10}" />
                
                </div>
                <div className="mb-3">
                    <label className="loginsignup-fields">Email ID:</label>
                        <input  size="20"className="form-control" value={profile.emailId} type="email" onChange={handleEmailIdChange} required/>
                
                </div>

                <input className="btn-btn" type="submit"/>
                <button  className="btn-btn1"type="reset" onClick={()=>setProfile({name:"",age:0,mobileNo:0,emailId:""})}>Reset</button>
            </form>
        </div>}
        { isSubmitted && <div className="submit-form">
            <h1>Your details</h1>
            <h4>Full Name:{profile.name}</h4>
            <h4>Age:{profile.age}</h4>
            <h4> MobileNo:{profile.mobileNo}</h4>
            <h4> Email Id :{profile.emailId}</h4>
            {/* <button className="btn1" onClick={()=>{setIsSubmitted(false); setProfile({name:'',age:0,mobileNo:0,emailId:""})
        }}>Back to Home</button> */}
        </div>}
    
        </>
        )
}
export default LoginSignup

 