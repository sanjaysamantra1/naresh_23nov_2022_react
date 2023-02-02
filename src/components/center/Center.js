import React, { useState } from "react";
import ConditionalDemo1 from "../conditionalRendering/ConditionalDemo1";
import ConditionalDemo2 from "../conditionalRendering/ConditionalDemo2";
import ConditionalDemo3 from "../conditionalRendering/ConditionalDemo3";
import ConditionalDemo4 from "../conditionalRendering/ConditionalDemo4";
import ConditionalCss from "../cssDemo/ConditionalCss";
import CssDemo from "../cssDemo/CssDemo";
import Demo1 from "../demo1/Demo1";
import EmployeeCRUD from "../employeeCRUD/EmployeeCRUD";
import EventDemo1 from "../events/EventDemo1";
import EventDemo2 from "../events/EventDemo2";
import EventDemo3 from "../events/EventDemo3";
import ExpressionDemo from "../expressionDemo/ExpressionDemo";
import ForceUpdateDemo1 from "../forceUpdate/ForceUpdateDemo1";
import ForceUpdateDemo2 from "../forceUpdate/ForceUpdateDemo2";
import FormDemo1 from "../form/FormDemo1";
import FormDemo2 from "../form/FormDemo2";
import FormDemo3 from "../form/FormDemo3";
import FormDemo4 from "../form/FormDemo4";
import FormDemo5 from "../form/FormDemo5";
import FormDemo6 from "../form/FormDemo6";
import GreetDemo1 from "../greet/GreetDemo1";
import GreetDemo2 from "../greet/GreetDemo2";
import HttpDemo1 from "../HTTP/HttpDemo1";
import HttpDemo2 from "../HTTP/HttpDemo2";
import HttpDemo3 from "../HTTP/HttpDemo3";
import HttpDemo4 from "../HTTP/HttpDemo4";
import LifecycleDemo1 from "../lifecycleHooks/LifecycleDemo1";
import LifecycleDemo2 from "../lifecycleHooks/LifecycleDemo2";
import LifecycleDemo3 from "../lifecycleHooks/LifecycleDemo3";
import LifecycleDemo4 from "../lifecycleHooks/LifecycleDemo4";
import LifecycleDemo5 from "../lifecycleHooks/LifecycleDemo5";
import ListDemo1 from "../list/ListDemo1";
import ListDemo2 from "../list/ListDemo2";
import ListDemo3 from "../list/ListDemo3";
import ListDemo4 from "../list/ListDemo4";
import ProductList from "../list/product_list";
import UsersList from "../list/UsersList";
import MemoDemo1 from "../memo/MemoDemo1";
import PureCompDemo1 from "../misc/PureCompDemo1";
import PureCompDemo2 from "../misc/PureCompDemo2";
import ModalDemo1 from "../modal/ModalDemo1";
import ModalDemo2 from "../modal/ModalDemo2";
import MyModal from "../props/MyModal";
import Welcome from "../props/Welcome";
import RefDemo1 from "../ref/RefDemo1";
import RefDemo2 from "../ref/RefDemo2";
import RefDemo3 from "../ref/RefDemo3";
import RefDemo4 from "../ref/RefDemo4";
import EmployeeList from "../state/EmployeeList";
import RemainingChar from "../state/RemainingChar";
import ShowHideDemo1 from "../state/ShowHideDemo1";
import ShowHideDemo2 from "../state/ShowHideDemo2";
import StateDemo1 from "../state/StateDemo1";
import StateDemo2 from "../state/StateDemo2";
import StateDemo3 from "../state/StateDemo3";
import TogglePassword1 from "../state/TogglePassword1";
import SweetAlertDemo1 from "../sweetAlert/SweetAlertDemo1";
import "./center.css";

export default function Center() {
  const [flag, setFlag] = useState(true);

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
      {/* <RemainingChar/> */}
      {/* <SweetAlertDemo1 /> */}
      {/* <ModalDemo1 /> */}
      {/* <ModalDemo2/> */}
      {/* <EmployeeList /> */}
      {/* <EmployeeCRUD /> */}
      {/* <EventDemo1/> */}
      {/* <EventDemo2 /> */}
      {/* <EventDemo3 /> */}
      {/* <PureCompDemo1/> */}
      {/* <PureCompDemo2 /> */}
      {/* <MemoDemo1/> */}
      {/* <LifecycleDemo1 name="Rahul" /> */}
      {/* <LifecycleDemo2/> */}
      {/* {flag ? <LifecycleDemo3 /> : <LifecycleDemo4 />}
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button> */}
      {/* <LifecycleDemo5/> */}
      {/* <RefDemo1 /> */}
      {/* <RefDemo2/> */}
      {/* <RefDemo3/> */}
      {/* <RefDemo4/> */}
      {/* <FormDemo1/> */}
      {/* <FormDemo2/> */}
      {/* <FormDemo3/> */}
      {/* <FormDemo4/> */}
      {/* <FormDemo5/> */}
      {/* <FormDemo6/> */}
      {/* <HttpDemo1 /> */}
      {/* <HttpDemo2/> */}
      {/* <HttpDemo3/> */}
      <HttpDemo4/>
    </div>
  );
}
