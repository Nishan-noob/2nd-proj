import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{Container, Row, Col,Button, Alert, Breadcrumb, Card,Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
      <Form>
        <Row>
          <Col md>
          <Form.Group controlId='fromEmail'>
            <Form.Label>Email </Form.Label>
            <Form.Control type='email' placeholder='Example@email.com'/>
            <Form.Text className='text-muted'>can U trust us</Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId='passwordFocus'>
            <Form.Label>Password </Form.Label>
            <Form.Control type='password' placeholder='password'/>
            <Form.Text className='text-muted'>U can't trust us</Form.Text>
          </Form.Group>
          </Col>
          </Row>
          <Button variant='secondary' type='submit'>Login</Button>
          
      </Form>
      <br></br>

        <Card className='mb-3' style={{color:'black'}}>
          <Card.Img src='https://picsum.photos/200/50'/>
          <Card.Body>
            <Card.Title>card escample</Card.Title>
            <Card.Text>
              This is an example of react cards
            </Card.Text>
            <Button variant='primary'>Yooooo</Button>
          </Card.Body>
        </Card>
      <Breadcrumb>
        <Breadcrumb.Item active>Test item</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant='success'>Don't press the button you muppet</Alert>
      <Button>Test button</Button>
      </Container>
      </header>
    </div>
  );
}

export default App;
