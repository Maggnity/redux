import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/userSlice";


export default function Login() {
    
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    
    const handleLogin = () => {
        console.log(name);
        dispatch(changeUser(name))
    }

    function sendName(e) {
        setName(e.target.value)
    }

    return (
        <Form>
            <h1 className="mt-5" >Login</h1>
            <Row className='align-items-center'>
                <Col sm={6} className={1}>
                    <Form.Control type="tex" placeholder="Nome" onChange={sendName} />
                </Col>
            <Button onClick={handleLogin}>Login</Button>
            </Row>
        </Form>
    )
}