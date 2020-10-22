import React, {useState} from 'react'
import Style from './style.module.css'

export default (props)=>{
    const[title, setTitle]=useState(props.gig?.title|| '')
    const[description,setDescription]=useState(props.gig?.description||'')
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submit({title,description})
    }

    return(
        <body>
            <div className={Style.main}>
            <div className={Style.jobform}><h1> Create your Job</h1></div>
            <form onSubmit={handleSubmit}>
                <div id={Style.name}>
                    <h2 className={Style.name}></h2>
                    <input className={Style.title} name='title' type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
                    <label className={Style.firstlabel}>Title:</label>
                </div>
                <div>
                    <input clasName={Style.description} name='description' type='text' value={description} onChange={e=>setDescription(e.target.value)}/>
                    <label className={Style.lastlabel}>Description:</label>
                </div>
                <button>Submit</button>
            </form>
            </div>
        </body>
    )
}
