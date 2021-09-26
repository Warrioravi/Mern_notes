import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css"

let LandingPage=()=>{
  

 return(
 <div className="main">
     <Container>
         <Row>
            <div className="intro-text">
                <div>
                <h1 className="title">Welcome to NotesApp</h1>
                <p className="subtitle">one safe place for all your notes</p>
                </div>
                <div className="buttoncontainer">
                  <a href='/login'>
                      <Button size="lg" className="landingbutton">Login</Button>
                      
                  </a>
                  <a href="/register">
                  <Button size="lg" className="landingbutton" variant='outline-primary'>Register</Button>
                  </a>
            </div>
            </div>
            
                
          </Row>
     </Container>

 </div>)


}
export default LandingPage;