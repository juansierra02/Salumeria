import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from './components/Auth/Auth'
import ThemeProvider from './components/Theme/ThemeContext';

import Navegacion from "./components/Navegacion/Navegacion";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import RutasPublicas from "./components/Rutas/RutasPublicas";
import RutasPrivadas from "./components/Rutas/RutasPrivadas";
import Logout from "./components/Logout/Logout";
import Footer from "./components/Footer/Footer"
import Productos from "./pages/Productos/Productos"
import Configuracion from "./pages/Configuracion/Configuracion";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider>
        <BrowserRouter basename="/Salumeria">
          <Navegacion />
          <Routes>
            <Route element={<RutasPublicas />}>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Productos" element={<Productos />} />
              <Route path="/Configuracion" element={<Configuracion />} />
            </Route>
            <Route element={<RutasPrivadas />}>
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  )
}

export default App