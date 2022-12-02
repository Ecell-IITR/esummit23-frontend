import {Form} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap';


const Formsaa =()=>{

return (
<>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="password" placeholder="Enter Password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Contact no</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Query</Form.Label>
    <Form.Control type="password" placeholder="Enter Query" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Write your message</Form.Label>
    <Form.Control type="password" placeholder="Enter Message" />
  </Form.Group>
  

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</>
    );

}

export default Formsaa;