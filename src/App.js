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
import Careers from "./components/careers/Careers";
import Notfound from "./components/notfound/Notfound";
import ProductDetails from "./components/list/ProductDetails";
import ProductDetail from "./components/list/ProductDetail";
import PermanentJobs from "./components/careers/PermanentJobs";
import ContractJobs from "./components/careers/ContractJobs";
import ProtectedRoute from "./utils/ProtectedRoute";
import Home2 from "./components/home/Home2";
import React from "react";
import { Suspense } from "react";
import userContext from "./utils/userContext";

const ProductList = React.lazy(() => import("./components/list/product_list"));

export default function App() {
  console.log(userContext);
  MyInterceptor1();
  MyInterceptor2();
  MyInterceptor3();
  MyInterceptor4();
  return (
    <div>
      <userContext.Provider value="{name:'sanjay',age:22,sal:5000}">
        {/* <Header /> */}
        <Navbar />
        {/* <Categories /> */}
        {/* <Carousel /> */}
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/home/2" element={<Home2 />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/careers" element={<Careers />}>
              <Route index element={<PermanentJobs />} />
              <Route path="permanent" element={<PermanentJobs />} />
              <Route path="contract" element={<ContractJobs />} />
            </Route>
            <Route
              exact
              path="/productlist"
              element={
                <ProtectedRoute>
                  <ProductList />
                </ProtectedRoute>
              }
            />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/productdetail" element={<ProductDetail />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
        <Center />
        <Footer />
      </userContext.Provider>
    </div>
  );
}
