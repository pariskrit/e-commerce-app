import React from "react";
import "./checkoutpage.css";
import CartProduct from "./CartProduct";
import { connect } from "react-redux";
import { getTotalPrice } from "../store/reducer/basketReducer";
import * as actionTypes from "../store/actions/actionTypes";
import * as basketActionCreaters from "../store/actions/BasketActionCreater";
import * as userActionCreaters from "../store/actions/authCreater";
import { useHistory } from "react-router-dom";

function CheckOutPage(props) {
  const totalPrice = getTotalPrice(props.products);
  let totalQuantity = null;
  let productId = null;
  const history = useHistory();

  let displayCart = <h1>No Items In Your Cart</h1>;

  const getQuantity = (quantity, id) => {
    totalQuantity = quantity;
    productId = id;
  };

  const onCheckOut = () => {
    if (props.user === null) {
      props.wasInCheckOut();
      history.push("/signin");
    } else {
      alert("Get Ready To Pay!!");
    }
  };

  if (props.products.length > 0) {
    displayCart = (
      <>
        <div className="product__label">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        {props.products.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            getQuantity={getQuantity}
          />
        ))}
        <div className="product__footer">
          <div className="footer__top">
            <p>Subtotal</p>
            <p>{totalPrice}</p>
          </div>
          <div className="footer__bottom">
            <button type="button">CONTINUE SHOPPING</button>
            <button
              type="button"
              onClick={() => props.update(productId, totalQuantity)}
            >
              UPDATE
            </button>
            <button type="button" onClick={onCheckOut}>
              {" "}
              CHECK OUT
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="checkoutpage">
      <h1>Your Cart</h1>
      {displayCart}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.basket.basket,
    user: state.user.idToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (productId, quantity) =>
      dispatch(basketActionCreaters.updateItems(productId, quantity)),

    wasInCheckOut: () => dispatch(userActionCreaters.checkCheckOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
