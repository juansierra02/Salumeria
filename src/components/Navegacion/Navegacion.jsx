import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Auth/Auth";

const Navegacion = () => {
    const { isAuthenticated } = useAuthContext();

    return (
        <Navbar
            bg='dark'
            variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src='./logo192.png'
                        width='50'
                        alt='Logo'
                    />
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <Link to='/' className='nav-link'>Inicio</Link>
                    <Link to='/Productos' className='nav-link'>Productos</Link>
                </Nav>
                <Nav className='ms-auto'>
                    {isAuthenticated ? (
                        <>
                            <Link to='/Configuracion' className='nav-link'>Configuración</Link>
                            <Link to='/logout' className='nav-link logout-btn'>
                                <i className="bi bi-box-arrow-right me-1"></i>
                                Cerrar Sesión
                            </Link>
                        </>
                    ) : (
                        <Link to='/Login' className='nav-link'>
                            <i className="bi bi-person me-1"></i>
                            Iniciar Sesión
                        </Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
};

export default Navegacion;
