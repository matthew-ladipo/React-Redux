import React from "react";
import { buyCake } from "../REDUX/CAKE/CakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <div>
      <p>Number of cakes - {props.numOfCakes}</p>
      <button onClick={props.buyCake}>buy cake </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(CakeContainer);
