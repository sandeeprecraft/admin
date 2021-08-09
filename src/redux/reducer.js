import { SUBMIT_FORM, SUBMIT_FORM1, SUBMIT_FORM2, SUBMIT_FORM3 } from "./actionnames";

const initialState ={
    email:"",
    password:"",
    firstname:"",
    lastname:"",
    phonenumber:""
}
const reducer =(state=[],action)=>{
    switch(action.type){
        case SUBMIT_FORM:
            return [...state]
        case SUBMIT_FORM1:
            return [...state]
        case SUBMIT_FORM2:
            return [...state]
        case SUBMIT_FORM3:
            return [...state]
        default:
            return state
    }
}
export default reducer