import '../styles/Home.css';
import '../styles/Cards.css';
import 'swiper/css';
import { Header } from "../components/Header";
import '../styles/slider.css';
import { Outlet } from "react-router-dom";

export const HomePage = ({envioData}) => {

// const {id} = useParams();

//     const [data, setData] = useState([]);
//     const [cantidad, setCantidad] = useState(1);
//     const [precio, setPrecio] = useState();
//     const [precioAcumulado, setPrecioAcumulado] = useState();
  
    
//     // const [envioData, setEnvioData] = useState([]);
//     // console.log(envioData)
    
// //   console.log(data)
  
//     const getData = async () => {
//         const res = await fetch(`http://localhost:3000/productos`);
//         const prod = await res.json();
//         // console.log(users)
//         // setData(prod);
//         // console.log(prod[4].promociones_online.find(x => String(x.id) === id));
//         const productSelected = prod[4].promociones_online.find(x => String(x.id) === id)
//         setData(productSelected)
//         // prod.promociones_online
//     }
  
//     // console.log(data)
//     const getPrecio = async () => {
//       const res = await fetch(`http://localhost:3000/productos`);
//       const prod = await res.json();
//       // console.log(users)
//       // setData(prod);
//       // console.log(prod[4].promociones_online.find(x => String(x.id) === id));
//       const productSelected = prod[4].promociones_online.find(x => String(x.id) === id)
//       setPrecio(Math.round(productSelected.precio_actual))
//       setPrecioAcumulado(Math.round(productSelected.precio_actual));
//       // prod.promociones_online
//   }
  
//     useEffect(() => {
//         getData();
//         getPrecio();
//     }, []);

    return (
        <>
            <Header 
            // data={data} setData={setData}
            // cantidad={cantidad} setCantidad={setCantidad}
            // precio={precio} setPrecio={setPrecio}
            // precioAcumulado={precioAcumulado} setPrecioAcumulado={setPrecioAcumulado}
            />
            <Outlet
            // data={data} setData={setData}
            // cantidad={cantidad} setCantidad={setCantidad}
            // precio={precio} setPrecio={setPrecio}
            // precioAcumulado={precioAcumulado} setPrecioAcumulado={setPrecioAcumulado}
            />
            {/* <HomeChildren
            data={data} setData={setData}
            cantidad={cantidad} setCantidad={setCantidad}
            precio={precio} setPrecio={setPrecio}
            precioAcumulado={precioAcumulado} setPrecioAcumulado={setPrecioAcumulado}
            /> */}
        </>
    )
}
