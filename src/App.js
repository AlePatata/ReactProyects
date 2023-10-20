import React, {Fragment, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
function App() {

    const [ productos, guardarProductos ] = useState([
        {id: 1, nombre: 'Camisa ReactJS', precio: 50},
        {id: 2, nombre: 'Camisa ReactJS2', precio: 50},
        {id: 3, nombre: 'Camisa ReactJS3', precio: 50},
        {id: 4, nombre: 'Camisa ReactJS4', precio: 50},
    ]);

    const [ carrito, agregarProducto] =useState([]);

    const date = new Date().getFullYear();

    return (
        <Fragment>
            <Header
                titulo = 'Tienda Virtual'
            />

            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    productos={productos}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
            ))}

            <Carrito
                carrito={carrito}
                agregarProducto={agregarProducto}
            />

            <Footer />
              date = {date}
        </Fragment>
    )
}

export default App;
