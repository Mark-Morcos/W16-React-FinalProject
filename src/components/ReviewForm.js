import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Stars from './Stars';
import Container from 'react-bootstrap/esm/Container';


const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
function ReviewForm(){  //get Method to fill the table with photo data
  const [TableState, setTableState] = useState([])
  const [review, setName] = useState("");  // update status for the review to parse the value and shown in alert
  
  const fetchData = async () =>{
      const res = await fetch(ENDPOINT)
      const data = await res.json()
      setTableState(data)
      console.log("render in fetchData")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
       alert(`The Review was  ${review}`)
     }
  useEffect(() => {
      fetchData()
      console.log("render in fetchData")
    
    },[])

 

  return (
    <Container fluid>

   <Row variant="success">
    <Alert variant="success">
    <Alert.Heading>About</Alert.Heading>
    {/* //Bold Font */}
    <p className="fw-bolder">  
      Please let us know your feedback about our photo selection
    </p>
    <hr />
    </Alert>
    </Row>
    <Row >
    <Col md="auto">
    <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th>#</th>
          <th>Image Info</th>
      
          <th>Reviews</th>
        </tr>
        </thead>
        {TableState.map(table => {
          return (
            <tbody>
            <tr >
              <td>#</td>
              <td>
                ID: {table.id}  <br></br>
                Title: {table.title},
                {/* //passing the stars component , not working properly  */}
                <div className="Stars"> 
                <Stars/>
                </div>
                </td>
          
              <td><form onSubmit={handleSubmit}>
    
    <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Enter your review
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          />
      </InputGroup>
      <Button as="input" type="submit" value="Submit" />
      {/* <input type="submit" style={{ color: "whitesmoke",backgroundColor: 'blue'}} /> */}
    </form></td>
            </tr>
            </tbody>
          )
        })}
      </Table>
      </Col>

    </Row>
    </Container>
    
  )
}

export default ReviewForm;