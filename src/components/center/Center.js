import React from "react";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ConditionalCss from "../cssDemo/ConditionalCss";
import CssDemo from "../cssDemo/CssDemo";
import Demo1 from "../demo1/Demo1";
import ExpressionDemo from "../expressionDemo/ExpressionDemo";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ForceUpdateDemo2 from "../forceUpdate/ForceUpdateDemo2";
import GreetDemo1 from "../greet/GreetDemo1";
import GreetDemo2 from "../greet/GreetDemo2";
import ListDemo1 from "../list/ListDemo1";
import ListDemo2 from "../list/ListDemo2";
import ListDemo3 from "../list/ListDemo3";
import ListDemo4 from "../list/ListDemo4";
import ProductList from "../list/product_list";
import UsersList from "../list/UsersList";
import "./center.css";

export default function Center() {
  return (
    <div className="center">
      {/* <Demo1 /> */}
      {/* <ExpressionDemo /> */}
      {/* <CssDemo /> */}
      {/* <ConditionalCss /> */}
      {/* <ConditionalDemo1 /> */}
      {/* <ConditionalDemo2/> */}
      {/* <ConditionalDemo3/> */}
      {/* <ConditionalDemo4/> */}
      {/* <ListDemo1/> */}
      {/* <ListDemo2/> */}
      {/* <ListDemo3 /> */}
      {/* <ListDemo4/> */}
      <ProductList />
      {/* <UsersList/> */}
      {/* <ForceUpdateDemo1 /> */}
      {/* <ForceUpdateDemo2/> */}
      {/* <div id='div1' name='name1'></div> */}
      {/* <GreetDemo1 name="Sachin" msg="Good Morning" /> */}
      {/* <GreetDemo1 name="Rahul" msg="Good Evening"></GreetDemo1> */}
      {/* <GreetDemo2 name="Ajay" msg="Good Afternoon" showTitle /> */}
    </div>
  );
}
