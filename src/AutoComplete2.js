import axios from 'axios';
import React,{useEffect, useState,useRef} from 'react'
import './AutoComplete.css'

function AutoComplete2() {
    const [data, setdata] = useState([])
    const [text,setText] = useState('');
    const [Users,setUsers] = useState([]); // All data
    const [suggestions,setSuggestions] =useState([]) //matched suggestions
    const refs = useRef(null)

    useEffect(()=>{
        refs.current.focus()
        axios.get('https://reqres.in/api/users')
        .then((res)=>setUsers(res.data.data))
        .catch(err=>console.log(err))
    },[])

    const handleChange=(value)=>{
        let matches =[]
        setText(value)
        if(value.length>0){
            matches=Users.filter((u)=>{
                const regex = new RegExp(`${value}`,"gi")   
                return (u.first_name.match(regex))  
            })
        }
        setSuggestions(matches)
        
    }


    const handleClick=(value)=>{
        setdata([...data,value])
        setText('')
        setSuggestions([]) // empty suggestions box when selected 
        refs.current.focus()
    }
    const handleDelete=(item)=>{
        const d = data.filter(i=>i!=item)
        setdata(d)
    }
    const handleSubmit=(e,value)=>{  
        if((e.key==='Enter' || e.key==='Tab') && value){
            setdata([...data,value])
            setText('')
        }
    }

    return (
        <>
        <div id="divblock">
            {data.map((item,key) => (
                
                    <div className="tag-item" key={item}>
                        {item}
                        <button
                        type="button"
                        className="button"
                        onClick={() =>handleDelete(item)}
                        >
                        &times;
                        </button>
                    </div>
                    ))
            }
        </div>
        <input 
                ref={refs}    
                id="input"
                type="text"
                placeholder="Type..."
                onChange={(e)=>handleChange(e.target.value)}
                value={text}
                onKeyDown={(e)=>handleSubmit(e,e.target.value)}
                />
                {suggestions&&suggestions.map((sug,i)=>{
                    return( <div key={i} id="suggestions"onClick={()=>handleClick(sug.first_name)}>{sug.first_name}</div>)
                })}
    </>
    )
}

export default AutoComplete2
