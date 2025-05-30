import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './Productos.css';

export default function Productos() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los productos');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const handleAddToCart = (product) => {

        console.log('Producto agregado al carrito:', product);

        Swal.fire({
            title: '¡Producto agregado!',
            text: `${product.title} ha sido agregado al carrito`,
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#1d3557',
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false
        });
    };

    if (loading) return <div className="loading">Cargando productos...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="productos-container">
            <h1 className="productos-title">Nuestros Productos</h1>
            <div className="productos-grid">
                {products.map(product => (
                    <div key={product.id} className="producto-card">
                        <div className="producto-imagen">
                            <img src={product.images[0]} alt={product.title} />
                        </div>
                        <div className="producto-info">
                            <h3>{product.title}</h3>
                            <p className="producto-descripcion">{product.description.substring(0, 100)}...</p>
                            <p className="producto-precio">${product.price}</p>
                            <button
                                className="btn-agregar-carrito"
                                onClick={() => handleAddToCart(product)}
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

