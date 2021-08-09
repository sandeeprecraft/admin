import React,{useState} from 'react'
import './form.css'

function UserDetails(Props) {
    const [text,settext] = useState('')
    const regex  =new RegExp(`^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$`,"gi")
    const Continue=(e)=>{
        console.log(Props.value.email.match(regex),"regularv expression") // checking regular expression
        const emailisvalid = Props.value.email.match(regex)
        if(emailisvalid)
        {
            if(Props.value.password===Props.value.confirmpassword&&Props.value.password.length>=8)
            {       
                Props.nextStep();
            }
            else{
                settext("Password and Confirm password should be matched and should be 8 charcters long")
            }
        }
        else{
            settext("please enter correct email")
        }
        
    }
    return (
        <div className="frame">
            <label className="labels">Email</label>
                <input 
                    class="form-styling"
                    type="text" 
                    value={Props.value.email} 
                    onChange={Props.handleChange('email')}
                />
            <label className="labels">Password</label>
                <input 
                    class="form-styling"
                    type="password"  
                    value={Props.value.password} 
                    onChange={Props.handleChange('password')}
                />
            <label className="labels">Confirm Password</label>
                <input 
                    class="form-styling"
                    type="password"  
                    value={Props.value.confirmpassword} 
                    onChange={Props.handleChange('confirmpassword')}
                />
            <div style={{color:"red"}}><label id="errorlabel">{text}</label></div>
            <br></br>
            <button class="next action-button" onClick={(e)=>Continue(e)}>Next</button>
           

        </div>
    )
}

export default UserDetails
