import './App.css';
import { IFormStore } from './store/FormStore';
import { Form, Button } from 'react-bootstrap';


interface AppProps {
  store: IFormStore
}

function App(props: AppProps) {

  const { store } = props;
  console.log(store);

  const losingFocusHandler = () => {
    console.log('ho perso il focus');
  }

  return (
    <div className='m-auto'>
      <div className='m-auto w-50 h-75 p-3 align-middle border border-primary rounded bg-body'>
        <header className='text-center'>Send your info</header>
        <hr />
        <Form>
          <div className='d-flex flex-wrap gap-1 justify-content-around'>
            <Form.Group className="mb-3" controlId="formBasicName" onBlur={losingFocusHandler}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelephoneNumber">
              <Form.Label>Telephone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter telephone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLinkedin">
              <Form.Label>LinkedIn profile</Form.Label>
              <Form.Control type="text" placeholder="Enter linkedin URL" />
            </Form.Group>
          </div>
          <hr />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default App
