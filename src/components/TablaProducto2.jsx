import { useEffect, useState } from "react/cjs/react.development";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Estilos/producto.css"



const TablaProducto2 = ({listaProductos, funcionParaAgregarProducto }) =>{
  
  useEffect(() =>{
    console.log("este es el contenido del la lsita de productos", listaProductos)
    }, [listaProductos]);

   
    const [nuevoproducto, setNuevoProducto] = useState( );
    const [codigoid, setCodigoId] = useState();
    const [precio, setPrecio] = useState();
    const [estado, setEstado] = useState();
    
    const enviarDatosAlBackend = () => {
       console.log("producto:", nuevoproducto, "codigoId:", codigoid, "precio:", precio, "estado", estado);
       if (codigoid ==="" || nuevoproducto === "" || precio === "") {
        toast.error("Ingrese la información requerida!");
       } else {
        toast.success("Producro creado con éxito!.");
        funcionParaAgregarProducto([...listaProductos, {Id:codigoid, nombre:nuevoproducto, precio:precio, estado:estado},
        ])
      }
      };
  
    
    return (

      
            
         
            <section > 

              <form className="login_Developer_2">
                <h3>Nuevo producto</h3>
                  <section>
                  <label htmlfor="producto">ingrese producto</label>
                  <label htmlfor="producto">ingrese id</label>
                  <label htmlfor="producto">ingrese precio</label>
                  <label htmlfor="producto">estado</label>
                  </section>
                  
                  <input onChange={(e) => {
                    setNuevoProducto(e.target.value);}}  value={nuevoproducto} type="text" placeholder="NuevoProducto" required />     
                  <input onChange={(e) => {
                    setCodigoId(e.target.value);}}  value={codigoid}type="id" placeholder="IdProducto" required/>
                  <input onChange={(e) => {
                    setPrecio(e.target.value);}} value={precio} type="id" placeholder="Precio" required/>
                  <select onChange={(e) => {
                    setEstado(e.target.value);}} value={estado} type="id" placeholder="Estado" required>
                      <option>Disponible</option>
                      <option>No_disponible</option>
                      </select>
                <button  type="button"    onClick={()=>{enviarDatosAlBackend();}}>
                     Ingresar 
                     </button>
                     
              </form>
              
                  <table >
                    <thead>
                      <tr> 
                        <th>id producto</th> 
                        <th>Detalle Producto</th> 
                        <th>Valor Unitario</th>  
                        <th>  Estado disponible</th> 
                        <th>Editar</th>
                        <th>Actualizar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaProductos.map((productos)=>{
                        return (
                          <tr> 
                            <td>{productos.Id} </td> 
                            <td>{productos.nombre}</td> 
                            <td>{productos.precio}</td>
                            <td>{productos.estado}</td>  
                            <td>{productos.editar}<a class="botonedit" href="#">Editar</a></td> 
                            <td>{productos.actualizar}<a class="botonedit" href="#">Actualizar</a></td>
                      </tr>

                        )
                      })}
                     
                   
                    </tbody>

                  
                  </table>
          
                  </section>    
      
    );
};

export default TablaProducto2;