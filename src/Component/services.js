import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './services.css';

function BasicExample() {
  return (
    <div>
      <div className='i'>
      <div className='y'>
      <Card style={{ width: '40rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      </div>
    </div>
  );
}

export default BasicExample;