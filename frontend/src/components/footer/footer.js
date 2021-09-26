import { Col, Container, Row } from "react-bootstrap";

let Footer=()=>{
   return <footer
   style={{bottom:"0px",
          display:"flex",
          justifyContent:"center",
          textAlign:"center",
          width:"100%",
          position:"relative"
          }}>
              <Container>
                  <Row>
                   <Col className="text-center py-3"> Copyright &copy; NotesApp
                   </Col> 
                  </Row>
              </Container>
       
   </footer>




}
export default Footer;