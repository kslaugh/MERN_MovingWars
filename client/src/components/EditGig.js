import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {navigate}from '@reach/router'
import Form from './Form'

export default function EditGig ({id}){
    const [gig,setGig]=useState('')

    useEffect(()=>{
        axios.get('http://localhost:8000/api/gigs'+id)
        .then(response=>{
            setGig(response.data)
        })
    },[id])

    function handleSubmit(event){
        axios.post('http://localhost:8000/api/gig',event)
        .then(()=>navigate('/'))
        .catch(console.log)

    }

    if (gig==='') return "loading..."

    return(
        <Form gig={gig} submit={handleSubmit}/>
    )



}