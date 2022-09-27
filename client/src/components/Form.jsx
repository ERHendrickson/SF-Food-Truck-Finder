import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Form = () => {
    const [day, setDayOfWeek] = useState('Monday');
    const [craving, setCraving] = useState('')
    const navigate = useNavigate()

    const query = (e) => {
        e.preventDefault();
        craving === ''? navigate(`/${day}`) : navigate(`/${day}/${craving}`)
    }
    
    return (
    <div className='form-control p-3'>
        <form onSubmit={query}>
            <div className='form-control d-flex justify-content-between'>
                <label className='m-1'>Choose Day: </label>
                <select onChange={e => setDayOfWeek(e.target.value)} value={day}>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
                </select>
            </div>
            <div className='form-control'>
                <label className='m-1'>Craving: </label>
                <input type="text" onChange={e => setCraving(e.target.value)} value={craving}/>
            </div>
            <div className='d-flex justify-content-end pt-4'>
                <input className='foodButton' type="submit" value="Find Food" />
            </div>
        </form>
    </div>
    )
}

export default Form