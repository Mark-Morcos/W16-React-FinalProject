import React ,{useState,useEffect} from 'react'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos';
const intialState ={
  
    id: '',
    title: '',
    url: ''
 
}

  function PostForm(){
    useEffect(() => {
      
      },[])

const [formState, setFormState] = useState(intialState)
const onChange = e => setFormState({...formState, [e.target.name]: e.target.value})

const postData = async () =>{
    const res = await fetch(ENDPOINT,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                   
                    id: formState.id,
                    title: formState.title,
                    url: formState.url

                })      
    })
    const data = await res.json()
    console.log(data)
}

const onSubmit = event =>{
    event.preventDefault()
    postData()
}


return (
    <div>
        <h1>Post Form</h1>
        <form onSubmit={onSubmit}>
            
            
                <div>
                <input 
               type="text"
                placeholder='Enter Title'
                name='title'
                value={formState.title}
                onChange={onChange}
                />
                </div>
                <div>
                <input
                type="text"
                placeholder='Enter url'
                name='URL'
                value={formState.url}
                onChange={onChange}
                />
             </div>
           
            <input type="submit" />
        </form>
    </div>
  )

}
export default PostForm;