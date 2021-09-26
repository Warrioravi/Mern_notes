import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { MainScreen } from '../../components/MainScreen'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const MyNotes = () => {
    const [notes,setNotes]=useState([]);
    let deleteHandler=(id)=>{
          if(window.confirm("Are you sure?")){

          }   
    };
    const fetchNotes=async()=>{
          const {data}=await axios.get('/api/notes');
          setNotes(data);
    }
    useEffect(()=>{
        fetchNotes();
    },[]);
    return (
          <MainScreen title="Welcome back abhishek kumar....">
              <Link to="/createnote">
                  <Button style={{marginLeft:10,marginBottom:6}} size="lg">
                      Create new Note 
                  </Button>
                  </Link>
                  {
                  notes.map(note=>{
                    return (
                    <Accordion key={note._id}>
                     <Card style={{margin:"10px"}}>
                    <Card.Header style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
                        <span style={{color:"black",
                                     textDecoration:"none",
                                     flex:"none",
                                     cursor:"pointer",
                                     fontSize:"18"
                                     }}>  <Accordion.Toggle as ={Card.Text} variant="link" eventKey="0">{note.title}</Accordion.Toggle></span>
                        <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button variant='danger' className='mx-2' onClick={()=>{deleteHandler(note._id)}}> Delete</Button>
                        </div>

                    </Card.Header>
                   <Accordion.Collapse eventKey="0">
                   <Card.Body>
                        <h4>
                            <Badge variant='success'>Category-{note.category}</Badge>
                        </h4>
                    <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                        created on -date
                    </footer>
                    </blockquote>
                    </Card.Body>
                   </Accordion.Collapse>

                </Card>


                    </Accordion>
                    )

                  })
                  }

                  
            
             




          </MainScreen>
        )
}
