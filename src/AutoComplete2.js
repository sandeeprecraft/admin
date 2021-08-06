import axios from 'axios';
import React,{useEffect, useState,useRef} from 'react'
import './AutoComplete.css'

function AutoComplete2() {
    const [data, setdata] = useState([]) //selecting multiple values
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
    const handleDelete=(index)=>{
        data.splice(index,1)
        setdata([...data])
    }
    const handleSubmit=(e,value)=>{  
        if((e.key==='Enter' || e.key==='Tab') && value){
            setdata([...data,value])
            setText('')
        }
        else if(e.key ==='Backspace'&&!value){
            data.pop()
            setdata([...data])
        }
    }


    return (
        <div class="container">
            <h1 id="search">Search</h1>
            <div class="tag-container" id="tag-container">
                    {data.map((item,key) => (
                        <div key={key} className="tag-item" key={item}>
                            {item}
                            <button
                            type="button"
                            className="button"
                            onClick={() =>handleDelete(key)}
                            >
                            &times;
                            </button>
                        </div>
                        ))
                    }

                <input 
                    ref={refs}    
                    id="input"
                    type="text"
                    placeholder="Type..."
                    onChange={(e)=>handleChange(e.target.value)}
                    value={text}
                    onKeyDown={(e)=>handleSubmit(e,e.target.value)}
                />
            </div>
            {suggestions&&suggestions.map((sug,i)=>{
                        return( <div key={i} id="suggestions"onClick={()=>handleClick(sug.first_name)}>{sug.first_name}</div>)
            })}
        </div>
    )
}

export default AutoComplete2
