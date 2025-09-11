import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DataGridDemo from './Component/DataGrid/datagrid';
import Footer from "./Component/Footer/footer";
import Homeslider from "./Component/homeSlider/homeslider";
import Product from "./Component/Product/product";



export default function Home() {
    console.log("Ecommerce App from server");
  return (
    <main>
        <div>
            <br></br>
            <Homeslider/>
            <br></br>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <Product />
            <br></br>
            <hr></hr>
            <br></br>
            <DataGridDemo />            
            <br></br>
            <hr></hr>
            <br></br>
            <Footer />
        </div>
    </main>
  );
}
