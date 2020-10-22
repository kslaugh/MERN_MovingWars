import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {navigate, Link} from '@reach/router'
import Form from './Form'
import Style from './style.module.css'


export default function CreateGig (){
    const[gigs,setGigs]=useState([])
    const[errors,setErrors]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/gigs')
        .then(response=>setGigs(response.data))
        .catch((e)=>{
            const errors=e.response.data.errors;
            const errArr=[];
            for (let i=0; i<errors.lenght; i++){
                errArr.push(errors[i].defaultMessage)
            }
        })
    })
    function handleSubmit(event){

        axios.post('http://localhost:8000/api/gig',{
            title:event.title,
            description:event.description
        })
        .then(()=>navigate('/processing'))
        .catch(console.log)
    }
    return(
        <div>
            <h2 className={Style.h2}>Create your Job Request</h2>
            <Form submit={handleSubmit}/>
            
        </div>
    ) 

}


