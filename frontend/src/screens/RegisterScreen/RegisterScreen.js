import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { MainScreen } from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
import Loading from "../../components/Loading";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmp, setConfirmp] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setmessage] = useState(null);
  const [picMessage, setpicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const postDetails=async (picture)=>{
   if(!picture){
     return setpicMessage("please select an image");
   }
    setpicMessage(null);
    if(picture.type==='image/jpeg'||picture.type==='image/png'||picture.type==='image/jpg'){
      const data=new FormData();
      data.append('file',picture);
      data.append('upload_preset','notesapp')
      data.append('cloud_name','keenwarrior')
      await fetch("https://api.cloudinary.com/v1_1/keenwarrior/image/upload",
      {method:"post", body:data})
      .then(res=>res.json())
      .then((data)=>{
        console.log(data);
        setPic(data.url.toString())
      }).catch((err)=>{console.log(err);})
    }
    else{
      setpicMessage("please select an image");
    }

  }

  let submitHandler =async (e) => {
    e.preventDefault();
    if(password!==confirmp){
      setmessage("PASSWORDS DONT MATCH")
    }
    else{
      try{
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const {data} = await axios.post(
          "/api/users",
          { name,email, password,pic },
          config
        );
        
        console.log(data);
        localStorage.setItem("userInfo",JSON.stringify(data));
        
      } catch (error) {
          setError(error.response.data.message);
           
      }
      setLoading(false);
    }
       
  };

  return (
    <div>
      <MainScreen title="Register">
        {message&&<ErrorMessage variant='danger' >{message}</ErrorMessage>}
        {loading&&<Loading/>}
        {error&&<ErrorMessage variant='danger'>{error}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>{setName(e.currentTarget.value)}} placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.currentTarget.value)}} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.currentTarget.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control value={confirmp} onChange={(e)=>{setConfirmp(e.currentTarget.value)}} type="password" placeholder=" Confirm Password" />
          </Form.Group>
          {picMessage && <ErrorMessage variant='danger'>{picMessage}</ErrorMessage>}
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Upload image</Form.Label>
            <Form.File
            onChange={(e)=>{
              postDetails(e.target.files[0]);
            }}
              type="image/png"
              id="custom-file"
              label="upload profile picture"
              custom
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already have an account? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </MainScreen>
    </div>
  );
};

export default RegisterScreen;
