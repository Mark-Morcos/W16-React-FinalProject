import {useState,useEffect } from 'react'
//import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
import EntryCard from './EntryCard';
//The Page of the HomePage
const Produts = () =>{
    
    const [movieData, setMovieData] = useState([]);


useEffect(() => {      //get Method to fill the cards with the photo data 
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/photos?_limit=10";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        // Do anything you need to do to
        // data before this call:
        setMovieData(data)  
        console.log(data)
      } catch (err) {
        console.error(err);
      }
    }
  
    getData();
  }, []);

return (
  
    <div>
      
      <Container >
      <EntryCard/> 

      <Row className="row-cols-2 row-cols-sm-3 g-4">
      
    { movieData.map(movie => (
       <Col>
       <Card  key={movie.id}>
       <Card.Img variant="top"  src={movie.url} />
    <Card.Body>
    <Card.Title>Title : {movie.title}</Card.Title>
    <Card.Text>Text</Card.Text>
    </Card.Body>
    <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
    </Card>
   </Col>
     
    ))}
     </Row>
     </Container>
  </div>
      )
  }  

  export default Produts;