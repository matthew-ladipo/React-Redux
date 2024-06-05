import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../REDUX/CAKE/CakeAction";

const HooksContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>Number of cakes - {numOfCakes} </p>
        <button onClick={() => dispatch(buyCake())}>buy cake </button>
      </div>
    </div>
  );
};

export default HooksContainer;
