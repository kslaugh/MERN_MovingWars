import React,{useEffect ,useState} from 'react'
import axios from 'axios'



export default function SingleGig(props){
    const[gig,setGig]=useState(null)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/gig/'+props.id)
        .then(response=>setGig(response.data));
    },[props.id]);

    if (gig==null) return 'loading...'


    return(
        <div>
            <h1>Job Detail</h1>
            <h3>Title</h3>
            <p>{gig.title}</p>
            <h3>Description</h3>
            <p>{gig.description}</p>
        </div>
    )
}