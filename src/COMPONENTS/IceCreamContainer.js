import React from "react";
import { buyIceCream } from "../REDUX/ICE-CREAM/IceCreamAction";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <p>Number of ice-cream - {props.numOfIceCreams}</p>
      <button onClick={props.buyIceCream}>buy ice-cream </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.IceCream.numOfIceCreams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(IceCreamContainer);
