import {Spinner } from "react-bootstrap";

const Loading = () =>{
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Spinner animation="border" variant="success" /></div>
    )
}
export default Loading;