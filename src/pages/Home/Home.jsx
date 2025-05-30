import React from "react";
//import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './Home.css';

const Home = () => {
    return (
        <div className="p-0">
            <div className="container-fluid container-imagen-home  p-0">
                <div className="container-logo-home">
                    <img src='./logo192.png' className="logo-home" alt='Logo'/>
                </div>
                <div className="border">
                    <img className="img-fluid" src="/imagen/imagen_front.webp" alt="First slide" />
                </div>
            </div>
            <div className="container-fluid pt-3">
                <Row xs={1} md={4} className="g-25 mb-5">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/imagen/bondiola_2.webp" />
                            <Card.Body>
                                <Card.Title>Bondiola Curada</Card.Title>
                                <Card.Text>
                                    Está elaborado a partir de carne y grasa de cerdo extraída de la región adyacente al cuello del animal y compactada dentro de una membrana mediante el atado con hilos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/imagen/choripollo.webp" />
                            <Card.Body>
                                <Card.Title>Chorizos de Pollo</Card.Title>
                                <Card.Text>
                                    Los Chorizos de Pollo, son embutidos mucho más saludables. Es muy versátil y prepararlo, aunque lleva su tiempo, no es tan complicado.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/imagen/chorizocasero.webp" />
                            <Card.Body>
                                <Card.Title>Chorizo de Cerdo</Card.Title>
                                <Card.Text>
                                    Elaborado principalmente a base de carne de cerdo picada y adobada con especias, siendo la más característica el pimentón y su tooque de ajo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/imagen/morcilla.webp" />
                            <Card.Body>
                                <Card.Title>Morcilla</Card.Title>
                                <Card.Text>
                                    Embutido elaborado básicamente con sangre cocida de cerdo condimentada con diversas especias y mezclada con otros ingredientes, en especial arroz, cebolla.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Home;