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
            <Footer />
        </div>
    </main>
  );
}
