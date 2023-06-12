import {useState, useEffect} from 'react'
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Circles } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';

import { setLocalStorageCNF } from '../utility/helper';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import logo from '../assets/logo.png';

const Home = () => {
    const [validated, setValidated] = useState(false);
    const [cnf, setCnf] = useState('');
    const [spinner, setSpinner] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setCnf('48310534000140');
    })
    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            // call API
            setSpinner(true);
            axios.get('https://api.fale.net.br/customer/invoices', {
                    params: {doc: cnf}
                })
                .then(response => {
                    setSpinner(false);
                    setLocalStorageCNF(cnf);
                    //localStorage.setItem('CNF', cnf);
                    
                    navigate("/invoice",{ state: { invInfo:  response.data} });
                })
                .catch(error => {
                    setSpinner(false);
                    toast.error('Ocorreu um erro');
                })
            
        }
        setValidated(true);
    }
    return (
        <Container fluid className='homeBkColor'>
            <div className='centered'>
                <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={spinner}
                    />
            </div>
            
            <Row>
                <Col md="6">
                    <Row>
                        <Col md="4">
                        </Col>
                        <Col md="8">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <div className='xs-center'>
                                    <Image src={logo} className='mtb-100'/>
                                </div>
                                
                                <p className='homeBoldText'>Conecte-se</p>
                                <p className='homeText mt-50'>CPF/CNPJ</p>

                                <Form.Control type="text" placeholder='CPF/CNPJ' value={cnf} onChange={e=>setCnf(e.target.value)} required/>
                                <Form.Control.Feedback type="invalid">
                                    Please Provide a valide CPF/CNPJ.
                                </Form.Control.Feedback>
                                <div className='xs-center'>
                                    <Button type="submit" className="submit-btn btn-circle mt-50 mb-50">ENTRAR</Button>
                                </div>
                                
                                <p className='homeText'>Ainda não é cliente?</p>
                            </Form>
                        </Col>
                    </Row>
                    
                </Col>
                <Col md="6" className='d-sm-none d-none d-md-block'>
                    <div className='background'>
                    </div>
                </Col>
            </Row>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="light"
            />
        </Container>
    )
}

export default Home