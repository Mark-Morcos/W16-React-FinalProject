import React, {useState} from 'react'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
const initialState = {
   
    id: '',
    title: '',
    URL: ''
}
function UpdateRecordForm() {
    const [formState, setFormState] = useState(initialState)
    const onChange = e => setFormState({...formState, [e.target.name]: e.target.value})
    const updateData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${formState.id}`, 
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                    id: formState.id,
                    title: formState.title,
                    url: formState.url
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
        <h2>UpdatePost Form</h2>
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
            <div>
                <input 
                    type="text" 
                    placeholder='Enter new Title'
                    name='title'
                    value={formState.title}
                    onChange={onChange}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='Enter Url'
                    name='url'
                    value={formState.url}
                    onChange={onChange}
                />
            </div>
            
            <input type="submit" />
        </form>
    </div>
  )
}

export default UpdateRecordForm