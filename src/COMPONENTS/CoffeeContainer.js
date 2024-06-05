import React from "react";
import  { buyCoffe } from '../REDUX/COFFE/CoffeAction' 
import { connect } from "react-redux";

const CoffeeContainer = (props) => {
  return (
    <div>
      <p>Number of coffee - {props.numOfCoffe}</p>
      <button onClick={props.buyCoffe}>buy coffee </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCoffe: state.coffee.numOfCoffe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCoffe: () => dispatch(buyCoffe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer);
