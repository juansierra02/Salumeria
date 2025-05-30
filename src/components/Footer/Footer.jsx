import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-contenedor'>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <div className='footer-logo'>
                                <p>
                                    <img src='./logo192.png' alt='Logo' className='mx-2' height='150' />
                                </p>
                            </div>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-bg-primary'>Salumeria Cumaná</li>
                            <li className='text-center'> Lunes a Sábados de 10 a 20 hs. Domingos de 10 a 16 hs.
                                Entregas a domicilio en el día. Se incluyen pedidos de hasta una hora antes del cierre. </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-bg-primary'>Enlaces</li>
                            <li>
                                <Link to='/' className='nav-link'>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/Productos' className='nav-link'>Productos</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 text-bg-primary'>Siguenos</li>
                            <li className='d-flex justify-content-between'>
                                <i className='bi bi-facebook' />
                                <i className='bi bi-instagram' />
                                <i className='bi bi-twitter' />
                                <i className='bi bi-youtube' />
                            </li>
                        </ul>
                        <div className='container'>
                            <p className='text-center'>J.Sierra © 2025</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer