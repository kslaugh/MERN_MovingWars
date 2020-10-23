import React, {useState} from 'react'
import Style from './style.module.css'

export default (props)=>{
    const[title, setTitle]=useState(props.gig?.title|| '')
    const[description,setDescription]=useState(props.gig?.description||'')
    const[startAddress,setStartAddress]=useState(props.gig?.startAddress||'')
    const[startCity,setStartCity]=useState(props.gig?.startCity||'')
    const[startState,setStartState]=useState(props.gig?.startState||'')
    const[startZipCode,setStartZipCode]=useState(props.gig?.startZipCode||'')
    const[endAddress,setEndAddress]=useState(props.gig?.endAddress||'')
    const[endCity,setEndCity]=useState(props.gig?.endCity||'')
    const[endState,setEndState]=useState(props.gig?.endState||'')
    const[endZipCode,setEndZipCode]=useState(props.gig?.endZipCode||'')
    const[attributes,setAttributes]=useState(props.gig?.attributes||'')
    const[fragile,setFragile]=useState(props.gig?.fragile||'')
    const[vehicle,setVehicle]=useState(props.gig?.vehicle||'')
    const[customer,setCustomer]=useState(props.gig?.customer||'')
    const[date,setDate]=useState(props.gig?.date||'')
    const[time,setTime]=useState(props.gig?.time||'')
    const[duration,setDuration]=useState(props.gig?.duration||'')
    const[contractor,setContractor]=useState(props.gig?.contractor||'')

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.submit(
            {
            title,
            description,
            startAddress,
            startCity,
            startState,
            startZipCode,
            endAddress,
            endCity,
            endState,
            endZipCode,
            attributes,
            fragile,
            vehicle,
            customer,
            date,
            time,
            duration,
            contractor
        })
    }

    return(
        <body>
            <div className={Style.main}>
                <div className={Style.jobform}><h1> Create your Job</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div id={Style.name}>
                            <h2 className={Style.name}></h2>
                            <label className={Style.firstlabel}>Title:</label>
                            <input className={Style.title} name='title' type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Description:</label>
                            <input clasName={Style.description} name='description' type='text' value={description} onChange={e=>setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Start Street Address:</label>
                            <input clasName={Style.description} name='startAddress' type='text' value={startAddress} onChange={e=>setStartAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Start City:</label>
                            <input clasName={Style.description} name='startCity' type='text' value={startCity} onChange={e=>setStartCity(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Start State:</label>
                            <input clasName={Style.description} name='startState' type='text' value={startState} onChange={e=>setStartState(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Start Zip Code:</label>
                            <input clasName={Style.description} name='startZipCode' type='number' value={startZipCode} onChange={e=>setStartZipCode(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Stret Address Destination:</label>
                            <input clasName={Style.description} name='endAddress' type='text' value={endAddress} onChange={e=>setEndAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>City Destination:</label>
                            <input clasName={Style.description} name='end City' type='text' value={endCity} onChange={e=>setEndCity(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>State Destination: </label>
                            <input clasName={Style.description} name='endState' type='text' value={endState} onChange={e=>setEndState(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}>Zip Code Destination:</label>
                            <input clasName={Style.description} name='endZipCode' type='number' value={endZipCode} onChange={e=>setEndZipCode(e.target.value)}/>
                        </div>

                        <div>
                            <label className={Style.lastlabel}>Attributes:</label>
                            <label className={Style.lastlabel}>Big:</label>
                            <input clasName={Style.description} name='attributes' type='checkbox' value={attributes} onChange={e=>setAttributes(e.target.value)}/>
                            <label className={Style.lastlabel}>Small:</label>
                            <input clasName={Style.description} name='attributes' type='checkbox' value={attributes} onChange={e=>setAttributes(e.target.value)}/>
                            <label className={Style.lastlabel}>heavy:</label>
                            <input clasName={Style.description} name='attributes' type='checkbox' value={attributes} onChange={e=>setAttributes(e.target.value)}/>
                            <label className={Style.lastlabel}>Light:</label>
                            <input clasName={Style.description} name='attributes' type='checkbox' value={attributes} onChange={e=>setAttributes(e.target.value)}/>

                        </div>
                        <div>
                            <label className={Style.lastlabel}>Fragile:</label>
                            <label className={Style.lastlabel}>Yes</label>
                            <input clasName={Style.description} name='fragile' type='checkbox' value={fragile} onChange={e=>setFragile(e.target.value)}/>
                            <label className={Style.lastlabel}>No</label>
                            <input clasName={Style.description} name='fragile' type='checkbox' value={fragile} onChange={e=>setFragile(e.target.value)}/>
                        </div>
                        <div>
                            <label>Vehicle Type</label>
                            <select onChange={e=>setVehicle(e.target.value)}>
                                <option value="vehicle">Select Vehicle</option>
                                <option value="van">Van</option>
                                <option value="pickUp">Pickup</option>
                                <option value="Truck">Truck</option>
                            </select>
                        </div>
                        <div>
                            <label className={Style.lastlabel}> Customer: </label>
                            <input clasName={Style.description} name='customer' type='text' value={customer} onChange={e=>setCustomer(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}> Date: </label>
                            <input clasName={Style.description} name='date' type='date' value={date} onChange={e=>setDate(e.target.value)}/>
                        </div>
                        <div>
                            <label className={Style.lastlabel}> Time: </label>
                            <input clasName={Style.description} name='time' type='time' value={time} onChange={e=>setTime(e.target.value)}/>
                        </div>
                        <div>
                        <input id='h' name='h' type='number' min='0' max='24' value={duration} onChange={e=>setDuration(e.target.value)}/>
                        <label for='h'>h</label>
                        <input id='m' name='m' type='number' min='0' max='59'/>
                        <label for='m'>m</label>
                        <input id='s' name='s' type='number' min='0' max='59'/>
                        <label for='s'>s</label>
                        </div>
                        <div>
                            <label className={Style.lastlabel}> Contractor: </label>
                            <input clasName={Style.description} name='contractor' type='text' value={time} onChange={e=>setContractor(e.target.value)}/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
        </body>
    )
}
