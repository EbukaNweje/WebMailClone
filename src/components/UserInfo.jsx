import React, { useEffect, useState } from 'react'
import "./Userdata.css"
import axios from 'axios'

const UserInfo = () => {

    const [userData, setUserdate] = useState()

    const getalluser = ()=>{
        const url = "https://web-mail-backend.vercel.app/all-users"
        axios.get(url)
        .then((response)=>{
            setUserdate(response.data.data)
        }).catch((error)=>{
          console.log(error)
        })

 }
    const deleteuser = (id)=>{
        const url = `https://web-mail-backend.vercel.app/delete/${id}`
        axios.delete(url)
        .then((response)=>{
            alert(response.data.message)
            window.location.reload()
        }).catch((error)=>{
          console.log(error)
        })

 }

 useEffect(()=>{
    getalluser()
 },[])


  return (
    <div className='Main'>
       {
        !userData ? "No user" : <>
             {
            userData?.map((props)=>(
            <div className='Card' key={props._id}>
           <span> Email: {props.email}</span>
           <span> PassWord: {props.detail}</span>
           <button className='Btn' onClick={()=>{deleteuser(props._id)}}>Delete</button>
            </div>  
            ))
        }
        </>
       }
        
    </div>
  )
}

export default UserInfo