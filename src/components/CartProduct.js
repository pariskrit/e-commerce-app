import React, { useState } from "react";
import "./cartproduct.css";
import { connect } from "react-redux";
import { getProductPrice } from "../store/reducer/basketReducer";
import * as actionTypes from "../store/actions/actionTypes";
import * as basketActionCreaters from "../store/actions/BasketActionCreater";

function CartProduct(props) {
  const [quantity, setQuantity] = useState(props.product.quantity);
  const productTotalPrice = getProductPrice(props.product);

  const changeQuantity = (e) => {
    e.preventDefault();
    props.getQuantity(e.target.value, props.product.id);

    setQuantity(e.target.value);
  };
  return (
    <div className="product__details">
      <img src={props.product.img} alt="" />
      <div className="product__types">
        <strong>{props.product.title}</strong>
        <p>color:white</p>
        <p>Size:S</p>
        <button type="button" onClick={() => props.onRemove(props.product.id)}>
          REMOVE
        </button>
      </div>
      <p>{props.product.price}</p>
      <div className="product__input">
        <input
          type="number"
          name="quantity"
          step="1"
          value={quantity}
          onChange={changeQuantity}
        />
      </div>

      <p>{productTotalPrice}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => dispatch(basketActionCreaters.removeItems(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartProduct);
