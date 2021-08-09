import React,{useState} from 'react'
import './form.css'

function PersonalDetails(Props) {
    const [text,settext] = useState('')
    const regex = new RegExp(/^[6-9]{1}[0-9]{9}$/)
    const Continue=(e)=>{
        const phoneisvalid = Props.value.phonenumber.match(regex)
        console.log(phoneisvalid,"phoneisvalid")
        if(Props.value.firstname&&Props.value.lastname)
        {
            if(phoneisvalid)
            {
                Props.nextStep();
            }
            else{
                settext("Phonenumber should contain numbers and 10 digits long")
            }
        }
        else
        {
            settext("fields cannot be empty")
        }
    }
    const Previous=(e)=>{
        Props.prevStep()
    }
    return (
        <div className ="frame">
            <label className="labels">FirstName</label>
                <input 
                    class="form-styling"
                    type="text" 
                    value={Props.value.firstname} 
                    onChange={Props.handleChange('firstname')}
                />
            <label className="labels">LastName</label>
                <input 
                    class="form-styling"
                    type="text" 
                    value={Props.value.lastname} 
                    onChange={Props.handleChange('lastname')}
                />
            <label className="labels">Phone No.</label>
            <input
            class ="form-styling"
            type="text"
            value={Props.value.phonenumber}
            onChange={Props.handleChange('phonenumber')}
            />
            <div style={{color:"red"}}><label id="errorlabel">{text}</label></div>
            <br/><br/>
            <button class="previous action-button-previous" onClick={(e)=>Previous(e)}>Pervious</button>
            <button class="next action-button" onClick={(e)=>Continue(e)}>Next</button>

        </div>
    )
}

export default PersonalDetails
