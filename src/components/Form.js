import React from 'react'
import "./css/form.css"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Form({newData, closeModal}) {

    const [person, setPerson] = useState("")
    const [date, setDate] = useState("")

    const resetData = ()=>{
        setPerson("")
        setDate("")
    }

    const submitPerson = (e)=>{
        e.preventDefault()
        const newPerson = {
            person: person,
            date: date,
            id: uuidv4()
        }
        // console.log(newPerson)
        newData(newPerson)
        resetData()
    }
    
  return (
    <>  
      <form className='form_content'>
        <label>
                <span>Person Name:</span>
                <input type="text" onChange={(e)=>setPerson(e.target.value)} value={person}/>
            </label>

            <br />

            <label>
                <span>Date:</span>
                <input className='date__input' type="date"  onChange={(e)=>setDate(e.target.value)} value={date}/>
            </label>

            <br />
            <button onClick={submitPerson}>Submit</button>
      </form>

        
        
    </>
  )
}

export default Form