import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Offline",
};

export default function Page() {
  const [title,setTitle] = useState('')
  const [kejadian , setKejadian ] = useState('')
  const subitHandle =(data : {title : string , kejadian : string}) => {
    window.localStorage.setItem('form-kejadian' , JSON.stringify(data))
  }
  return (
    <>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
      <input type="text" value={title} onInput={(e : any) => setTitle(e.target.value)} />
      <label htmlFor="">
        Lokasi
      </label>
      <input type="text" value={kejadian} onInput={(e : any) => setKejadian(e.target.value)} />
      <button onClick={()=> subitHandle({title , kejadian})}></button>
    </>
  );
}
