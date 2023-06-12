import React from 'react'

import {Row, Col, Image} from 'react-bootstrap'
import { Whatsapp, Facebook,  Instagram} from 'react-bootstrap-icons';

import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='footer-size hf-color pt-5 pb-3 pl-50 pr-50'>
            <Row>
                <Col  md="1">

                </Col>
                <Col  md="10">
                    <Row>
                        <Col md='4'>
                            <a href='/'><Image src={logo}/></a>
                            <p className='footer-text mt-3'>Modernizar as ferramentas para adaptar as rotinas de trabalho ao futuro dos negocios e &#10;gerar resultados. E nisso que acreditamos.</p>
                        </Col>
                        <Col md='2'>
                            <p className='footer-text-1'>
                                Saiba mais
                            </p>
                            <p className='footer-text mb-auto'>Planos</p>
                            <p className='footer-text mb-auto'>Solicite contato</p>
                            <p className='footer-text mb-auto'>Seja uma revenda</p>
                        </Col>
                        <Col md='3'>
                            <p className='footer-text-1'>
                                Vendas
                            </p>
                            <p className='footer-text mb-auto'>Telefone/WhatsApp
                                <Whatsapp size={30} style={{marginLeft:5}}/>
                            </p>
                            <p className='footer-text-2'>4007-1953</p>
                        </Col>
                        <Col md='3'>
                            <p className='footer-text-1'>
                                Nossas redes sociais
                            </p>
                            <a href="https://www.facebook.com" style={{marginRight:10}}>
                                <Facebook size={30} color="rgb(13, 106, 168)"/>
                            </a>
                            <a href="https://www.instagram.com/">
                                <Instagram size={30} color="rgb(13, 106, 168)"/>
                            </a>
                            
                        </Col>
                    </Row>
                    <Row>
                        <div className='footer-text mt-5'>
                            <p>Copyright 2023 FALE·Todos os direitos reservados·CNPJ 02.777.002/0001-17</p>
                        </div>
                    </Row>
                </Col>
                <Col  md="1">
                    
                </Col>
            </Row>
            
        </div>
    )
}

export default Footer