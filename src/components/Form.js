import React,{useState} from 'react'
import PersonalDetails from './PersonalDetails'
import './form.css'
import UserDetails from './UserDetails'
import Success from './Success'
function Form() {
    const [step, setstep] = useState(1)
    const [data,setdata] = useState({
        email:"",
        password:"",
        confirmpassword:"",
        firstname:"",
        lastname:"",
        phonenumber:""
    })
    const prevStep=()=>{
        removeClass('personal')
        addClass('account')
        setstep((prev)=>prev-1)
    }
    const nextStep=()=>{
        setstep((prev)=>prev+1)
    }
    const handleChange=input=>e=>{
        setdata({...data,[input]:e.target.value})
    }

    const addClass=(element)=>{
        var e = document.getElementById(element);
        e.classList.add('active');
    }
    const removeClass =(element)=>{
        var e = document.getElementById(element)
        e.classList.remove('active');
    }
    const {email,username,password,confirmpassword,firstname,lastname,phonenumber} = data;
    const values = {email,username,password,confirmpassword,firstname,lastname,phonenumber}
    return (
        <div className="frame">
            <ul id="progressbar">
                        <li class="active" id="account"><strong>Account</strong></li>
                        <li id="personal"><strong>Personal</strong></li>
                        <li id="confirm"><strong>Finish</strong></li>
            </ul>
            {(()=>{
                switch (step) {
                    case 1:
                        return(
                            <UserDetails
                            nextStep={nextStep}
                            handleChange={handleChange}
                            value={values}
                            prevStep={prevStep}
                            />
                        )
                    case 2:
                        addClass("personal")
                        removeClass("account")
                        removeClass("confirm")
                        return(
                            <PersonalDetails 
                                prevStep={prevStep}
                                handleChange={handleChange}
                                value={values}
                                nextStep={nextStep}
                            />
                        )
                    case 3:
                        addClass("confirm")
                        removeClass("account")
                        removeClass("personal")
                        return(
                            <Success 
                                prevStep={prevStep}
                                value={values}
                                nextStep={nextStep}
                            />
                            )
                    default:
                        break;
                }
            })()}
        </div>
    )
}

export default Form
