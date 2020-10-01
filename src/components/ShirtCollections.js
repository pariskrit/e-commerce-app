import React, { useEffect } from "react";
import "./shirtcollection.css";
import SingleTshirt from "./SingleTshirt";
import { connect } from "react-redux";
import * as actionCreaters from "../store/actions/BasketActionCreater";

function ShirtCollections(props) {
  useEffect(() => {
    props.getProducts();
  });
  return (
    <div className="shirtcollections">
      <h2>T-Shirts Collection</h2>
      <div className="shirtcollections__row">
        {props.tShirts.map((item) => (
          <SingleTshirt
            key={item.id}
            tshirt={item}
            clickedTshirt={() => props.clickedTshirt(item.id)}
          />
        ))}
      </div>
      <div className="shirtcollections__row">
        {props.tShirts.map((item) => (
          <SingleTshirt
            key={item.id}
            tshirt={item}
            clickedTshirt={() => props.clickedTshirt(item.id)}
          />
        ))}
      </div>
      <div className="shirtcollections__row">
        {props.tShirts.map((item) => (
          <SingleTshirt
            key={item.id}
            tshirt={item}
            clickedTshirt={() => props.clickedTshirt(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tShirts: state.basket.tShirts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(actionCreaters.getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShirtCollections);
