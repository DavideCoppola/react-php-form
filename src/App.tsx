import "./App.css";
import { IFormStore } from "./store/FormStore";
import { Form, Button, FloatingLabel } from "react-bootstrap";

interface AppProps {
  formStore: IFormStore;
}

function App(props: AppProps) {
  const { formStore } = props;
  console.log(formStore);

  const submitFormHandler = (params: React.FormEvent) => {
    params.preventDefault();
    console.log(params);
    console.log('SUBMITTED!');
  }

  return (
    <div className="m-auto">
      <div className="m-auto w-50 h-75 p-3 align-middle border border-primary rounded bg-body">
        <header className="text-center">Send your info</header>
        <hr />
        <Form onSubmit={submitFormHandler}>
          <div className="d-flex flex-wrap gap-1 justify-content-between">
            <Form.Group
              className="mb-3"
              controlId="formBasicName"
            >
              <FloatingLabel controlId="floatingName" label="Name">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  /* value={formStore.name} */
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {formStore.setName(e.target.value)}}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <FloatingLabel controlId="floatingEmail" label="Email">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  /* value={formStore.email} */
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {formStore.setEmail(e.target.value)}}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelephoneNumber">
              {/* <Form.Label>Telephone Number</Form.Label> */}
              <FloatingLabel
                controlId="floatingTelephone"
                label="Telephone Number"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter telephone number"
                  /* value={formStore.telephoneNumber ?? 0} */
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {formStore.setTelephone(e.target.value)}}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLinkedin">
              {/* <Form.Label>LinkedIn profile</Form.Label> */}
              <FloatingLabel
                controlId="floatingWebsite"
                label="LinkedInProfile"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter linkedin URL"
                  /* value={formStore.website} */
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {formStore.setWebsite(e.target.value)}}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="w-100">
              <FloatingLabel controlId="floatingComment" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  /* value={formStore.message} */
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {formStore.setMessage(e.target.value)}}
                />
              </FloatingLabel>
            </Form.Group>
          </div>
          <hr />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
