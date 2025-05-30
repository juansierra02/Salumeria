import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../Auth/Auth';

import './Login.css';

function Login() {
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");
    const navigate = useNavigate();
    const { login } = useAuthContext()

    const iniciarSesion = (e) => {
        e.preventDefault()


        var txtusu = document.getElementById('txtusu').value;
        var txtpas = document.getElementById('txtpas').value;
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert("Complete los datos faltantes!!");
        } else {
            if (usu === "admin" && pas === "123") {
                login()
                navigate('/Configuracion');
            } else {

                alert("Error de Usuario y/o Contraseña");
                document.getElementById('txtusu').value = "";
                document.getElementById('txtpas').value = "";
                document.getElementById('txtusu').focus();
            }
        }
    }


    return (
        <div>
            <div className="container text-center contenedor-login mb-3">
                <div className="row col justify-content-center pt-5">
                    <div className="col-6 border caja-login p-2">
                        <h2 className="m-4">Login</h2>
                        <form id="form_login" onSubmit={iniciarSesion}>
                            <div>
                                <label htmlFor="txtusu"><strong>Usuario</strong></label>
                                <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="txtpas"><strong>Contraseña</strong></label>
                                <input type="password" id="txtpas" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />
                            </div><br />
                            <button type="submit" className="btn btn-primary mb-2">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="info-message">
                    <h4>Credenciales</h4>
                    <p><strong>Usuario:</strong> admin</p>
                    <p><strong>Contraseña:</strong> 123</p>
                </div>
            </div>
        </div>
    )
}

export default Login