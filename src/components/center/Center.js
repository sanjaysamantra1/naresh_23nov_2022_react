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
import MyModal from "../props/MyModal";
import Welcome from "../props/Welcome";
import RemainingChar from "../state/RemainingChar";
import ShowHideDemo1 from "../state/ShowHideDemo1";
import ShowHideDemo2 from "../state/ShowHideDemo2";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import TogglePassword1 from "../state/TogglePassword1";
import "./center.css";

export default function Center() {
  let f1 = function () {
    console.log("I am f1 from center component");
  };
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
      {/* <ProductList /> */}
      {/* <UsersList/> */}
      {/* <ForceUpdateDemo1 /> */}
      {/* <ForceUpdateDemo2/> */}
      {/* <div id='div1' name='name1'></div> */}
      {/* <GreetDemo1 msg="Good Morning" /> */}
      {/* <GreetDemo1 name="Sachin" msg="Good Morning" age={45} f1={f1} /> */}
      {/* <GreetDemo1 name="Rahul" msg="Good Evening"></GreetDemo1> */}
      {/* <GreetDemo2 name="Ajay" msg="Good Afternoon" showTitle /> */}
      {/* <Welcome></Welcome>
      <hr/>
      <Welcome>
        <div>This is div-1 From Parent</div>
        <div>This is div-2 From Parent</div>
      </Welcome> */}
      {/* <MyModal heading="Registration Form">
        <form id="modalBody">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </MyModal> */}
      {/* <StateDemo1 /> */}
      {/* <StateDemo2 /> */}
      {/* <StateDemo3/> */}
      {/* <ShowHideDemo1/> */}
      {/* <ShowHideDemo2 /> */}
      {/* <TogglePassword1/> */}
      <RemainingChar/>
    </div>
  );
}
