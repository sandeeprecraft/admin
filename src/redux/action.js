import { SUBMIT_FORM,SUBMIT_FORM1,SUBMIT_FORM2,SUBMIT_FORM3 } from "./actionnames";

export function submitform(data){
    return{
        type:SUBMIT_FORM,
        payload:data
    }
}
export function submitform1(data){
    return{
        type:SUBMIT_FORM1,
        payload:data
    }
}
export function submitform2(data){
    return{
        type:SUBMIT_FORM2,
        payload:data
    }
}
export function submitform3(data){
    return{
        type:SUBMIT_FORM3,
        payload:data
    }
}