import {useState, useEffect} from 'react'
import { Row, Col, Container, Image, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Circles } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from 'react-router-dom';

import { setLocalStorageCNF, getCNFDigit } from '../utility/helper';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import logo from '../assets/logo.png';

const Home = () => {
    const [validated, setValidated] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [cpfCnpj, setcpfCnpjValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            // call API
            setSpinner(true);
            axios.get('https://api.fale.net.br/customer/invoices', {
                    params: {doc: getCNFDigit(cpfCnpj)}
                })
                .then(response => {
                    setSpinner(false);
                    setLocalStorageCNF(getCNFDigit(cpfCnpj));
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
    const handleCpfCnpjChange = (event) => {
        // Get only the numbers from the data input
        let data = event.target.value.replace(/\D/g, "");
        // Checking data length to define if it is cpf or cnpj
        if (data.length > 11) {
          // It's cnpj
          let cnpj = `${data.substr(0, 2)}.${data.substr(2, 3)}.${data.substr(
            5,
            3
          )}/`;
          if (data.length > 12) {
            cnpj += `${data.substr(8, 4)}-${data.substr(12, 2)}`;
          } else {
            cnpj += data.substr(8);
          }
          data = cnpj;
        } else {
          // It's cpf
          let cpf = "";
          let parts = Math.ceil(data.length / 3);
          for (let i = 0; i < parts; i++) {
            if (i === 3) {
              cpf += `-${data.substr(i * 3)}`;
              break;
            }
            cpf += `${i !== 0 ? "." : ""}${data.substr(i * 3, 3)}`;
          }
          data = cpf;
        }
        setcpfCnpjValue(data);
    };
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

                                <Form.Control type="text" placeholder='CPF/CNPJ' value={cpfCnpj} onChange={(value) => handleCpfCnpjChange(value)} required/>
                                <Form.Control.Feedback type="invalid">
                                    Forneça um CPF/CNPJ válido.
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