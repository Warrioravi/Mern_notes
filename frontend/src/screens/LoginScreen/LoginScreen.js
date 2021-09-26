import React, {  useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MainScreen } from "../../components/MainScreen";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);




  const submitHandler = async(e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const {data} = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      
      console.log(data);
      localStorage.setItem("userInfo",JSON.stringify(data));
      
    } catch (error) {
        setError(error.response.data.message);
         
    }
    setLoading(false);
  };

  return (
    <div>
      <MainScreen title="Login">
         
          {error ?<ErrorMessage variant='danger'>{error}</ErrorMessage> : "" }
          {loading ?<Loading/> : "" }
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </MainScreen>
    </div>
  );
};

export default LoginScreen;
