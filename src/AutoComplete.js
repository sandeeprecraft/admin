import axios from 'axios';
import React,{useEffect, useState} from 'react'
import './App.css'

function AutoComplete() {
    const [text,setText] = useState([]);
    const [Users,setUsers] = useState([]);
    const [suggestions,setSuggestions] =useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then((res)=>setUsers(res.data.data))
        .catch(err=>console.log(err))
    },[])

    const handleChange=(value)=>{
        let matches =[]
        if(value.length>0){
            matches=Users.filter((u)=>{
                const regex = new RegExp(`${value}`,"gi")
                return (u.first_name.match(regex))
            })
        }
        console.log(matches)
        setSuggestions(matches)
        setText(value)
    }
    const handleClick=(value)=>{
        setText(value)
        setSuggestions([])
    }

    return (
        <div>
            <h1 id="search">Search</h1>
            <input id="inputarea" type="text" placeholder="Type text" onChange={(e)=>handleChange(e.target.value)} value={text}></input>
            {suggestions&&suggestions.map((sug,i)=>{
               return( <div key={i} id="suggestions"onClick={()=>handleClick(sug.first_name)}>{sug.first_name}</div>)
            })}
        </div>
    )
}

export default AutoComplete
