import React from "react";
import { Provider } from "react-redux";
import Store from "./REDUX/Store";
import "./App.css";
import CakeContainer from "./COMPONENTS/CakeContainer";
// import HooksContainer from "./COMPONENTS/HooksContainer";
import IceCreamContainer from "./COMPONENTS/IceCreamContainer";
import CoffeeContainer from "./COMPONENTS/CoffeeContainer";
import NewCakeContainer from "./COMPONENTS/NewCakeContainer";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <CoffeeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
