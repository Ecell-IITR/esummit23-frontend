 import {Form} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap';
import styles from './Footer.module.css'


const Forms =()=>{

return (
<>

<Form>


 <div className={styles.name}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control style={{backgroundColor:"#311C00", color:"white"}} placeholder="Enter your full name" />
    </Form.Group>
  </div>


  <div className={styles.emailAddress}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" style={{backgroundColor:"#311C00", color:"white"}} placeholder="Enter your E-mail address" background-color="black" />
    </Form.Group>
   </div>



  <div className={styles.phoneNoAndQuery}>
    <div className={styles.phoneNo}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control style={{backgroundColor:"#311C00", color:"white"}} type="phoneNo" placeholder="Phone No" />
      </Form.Group>
    </div>
    <div className={styles.query}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control style={{backgroundColor:"#311C00", color:"white"}} placeholder="Query Details" />
      </Form.Group>
    </div>
  </div>

  <div className={styles.message}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control style={{backgroundColor:"#311C00", color:"white",height:"90px"}} placeholder="Type your message here"/>
  </Form.Group>
  </div>

  <Button  variant="primary" type="submit" className={styles.button}>
    Submit
  </Button>
</Form>
</>
    );

}

export default Forms;