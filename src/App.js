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
      <Center />
      <Footer />
    </div>
  );
}
