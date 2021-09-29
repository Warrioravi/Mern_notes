import React, {  useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MainScreen } from "../../components/MainScreen";
import { Link,useHistory } from "react-router-dom";
import { login} from "../../redux/actions/userActions";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const history =useHistory();
  const userLogin= useSelector((state)=>state.userLogin);
  const {loading,error,userInfo}=userLogin;
  useEffect(()=>{
   if(userInfo){
     history.push('/mynotes')
   }
  },[history,userInfo])




  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login(email,password))
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
