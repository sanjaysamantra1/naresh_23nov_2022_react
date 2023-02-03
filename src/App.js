import Header from "./components/header/Header";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import { MyInterceptor1 } from "./interceptors/MyInterceptor1";
import { MyInterceptor2 } from "./interceptors/MyInterceptor2";
import { MyInterceptor3 } from "./interceptors/MyInterceptor3";
import { MyInterceptor4 } from "./interceptors/MyInterceptor4";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import ProductList from "./components/list/product_list";
import Careers from "./components/careers/Careers";
import Notfound from "./components/notfound/Notfound";

export default function App() {
  MyInterceptor1();
  MyInterceptor2();
  MyInterceptor3();
  MyInterceptor4();
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {/* <Categories /> */}
      {/* <Carousel /> */}
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<Aboutus />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Center />
      <Footer />
    </div>
  );
}
