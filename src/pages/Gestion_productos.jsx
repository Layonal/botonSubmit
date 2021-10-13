import React, {useEffect, useState, }  from "react";
import "../Estilos/producto.css"
import TablaProducto1 from "../components/TablaProducto1";
import TablaProducto2 from "../components/TablaProducto2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const productosBackend = [
      {Id: "OOOO1",
      nombre: "camisa",
      precio: 23000,
      estado: "si",
      editar: "",
      actualizar: "",
      },
      {Id: "OOOO2",
      nombre: "pantalon",
      precio: 27000,
      estado: "si",
      editar: "",
      actualizar: "",
      },
     
           
      
    ];



const Gestion_productos = () =>{
      
      const [productos, setProductos] = useState([]);      
      useEffect(() => {
            // obtener lista de producto desde backend
            setProductos(productosBackend);
            }, []); 

      return(
      < >
       
            <TablaProducto1  />
            <TablaProducto2 listaProductos={productos} funcionParaAgregarProducto={setProductos}/>
            <ToastContainer position="top-center"
                  autoClose={5000}/>
      </>
          );
}
export default Gestion_productos;