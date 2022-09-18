import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';

function ImgOverlay() {
  return (
  
    <Card className=" text-white" style={{ width : '100%' }}>
      <Card.Img src="https://images.unsplash.com/photo-1624396963238-df0e48367ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Photo Collection</Card.Title>
        <Card.Text>
          Check our Photo collection ,Add more , Modify or delete through the Pictures Page 
        </Card.Text>
        <Card.Text>Leave your reviw in the About Page</Card.Text>
      </Card.ImgOverlay>
    </Card>
 
  );
}

export default ImgOverlay;
