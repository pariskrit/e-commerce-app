import React from "react";
import "./singletshirt.css";
import { Link } from "react-router-dom";

function SingleTshirt(props) {
  return (
    <Link className="singletshirt" to={"/selectTshirt/" + props.tshirt.id}>
      <div className="singletshirt" onClick={props.clickedTshirt}>
        <img src={props.tshirt.img} alt="" />
        <h5>{props.tshirt.title}</h5>
        <p>Rs {props.tshirt.price}</p>
      </div>
    </Link>
  );
}

export default SingleTshirt;
