//Page of the photos database and all the CRUD methods 
import React ,{Component,useState,useEffect} from 'react'
import PostForm from './PostForm';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import DeleteRecord from './DeleteRecord';
import UpdateRecordForm from './UpdateForm';
import reviewForm from './ReviewForm';
const ENDPOINT = 'https://jsonplaceholder.typicode.com/photos?_limit=50';
// ?_limit=50

function DataTable(){ //get Method to fill the table with the photo data 
const [TableState, setTableState] = useState([])

const fetchData = async () =>{
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    setTableState(data)
    console.log("render in fetchData")
}
useEffect(() => {
    fetchData()
    console.log("render in fetchData")
  
  },[])
return (
    <Container fluid>
      <Row className="row-cols-2 row-cols-sm-3">
        <Col md="auto">
      <Table striped bordered hover size="sm">
        <thead>
        <tr>
          <th>#</th>
          <th>Image ID</th>
          <th>Image Title</th>
          <th>Image URL</th>
        </tr>
        </thead>
        {TableState.map(table => {  //map the data id and url in the table
          return (
            <tbody>
            <tr >
              <td>#</td>
        
              <td>{table.id}</td>
              <td>{table.title}</td>
              <td>{table.url}</td>
            </tr>
            </tbody>
          )
        })}
      </Table>
      </Col>
    
    <Col>
        <PostForm />
        <UpdateRecordForm />
        <DeleteRecord />
    </Col>
    </Row>
    </Container>
  )

}
export default DataTable;