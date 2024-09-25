"use client"

import { useState } from "react";


export const Form = () => {
    const [title,setTitle] = useState('')
  const [kejadian , setKejadian ] = useState('')
  const subitHandle =(data : {title : string , kejadian : string}) => {
    window.localStorage.setItem('form-kejadian' , JSON.stringify(data))
  }
    return (
        <>
        <input type="text" value={title} onInput={(e : any) => setTitle(e.target.value)} />
        <label htmlFor="">
            Lokasi
        </label>
        <input type="text" value={kejadian} onInput={(e : any) => setKejadian(e.target.value)} />
        <button onClick={()=> subitHandle({title , kejadian})}></button>
        </>
        
    )
}

  