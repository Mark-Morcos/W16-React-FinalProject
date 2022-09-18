import React, {useState} from 'react'
import DataTable from './DataTable'
// const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=50'';
const initialState = {
    id: ''
 
}
function DeleteRecord() {
    const [formState, setFormState] = useState(initialState)
   const onChange = e => setFormState({...formState, [e.target.name]: e.target.value})
    const updateData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${formState.id}`, 
        {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                    id: formState.id,
                })
        })
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = event => {
        event.preventDefault()
        updateData()
    }

  return (
    <div>
        <h2>Delete Form</h2>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter ID'
                    name='id'
                    value={formState.id}
                    onChange={onChange}
                />
            </div>
            
            <input type="submit" />
        </form>
    </div>
  )
}

export default DeleteRecord;