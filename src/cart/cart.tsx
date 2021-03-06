import React from "react";
import ReactDOM from "react-dom";
import styles from "./cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../stateManager/actions";

export default function Cart({ toggle, onCloseCart }) {
  const { selectedItems, totalSum } = useSelector((state: ROOTSTATE) => state);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  return ReactDOM.createPortal(
    <div
      className={
        styles["cart-overlay"] + " " + (toggle && styles["transparentBcg"])
      }
    >
      <div className={styles["cart"] + " " + (toggle && styles["showCart"])}>
        <span className={styles["close-cart"]} onClick={onCloseCart}>
          <i className="fas fa-window-close"></i>
        </span>
        <h2>your cart</h2>
        <div className={styles["cart-content"]}>
          {selectedItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <div className={styles["cart-footer"]}>
          <h3>
            your total : ${" "}
            <span className={styles["cart-total"]}>{totalSum}</span>
          </h3>
          <button
            className={styles["clear-cart banner-btn"]}
            onClick={handleClearCart}
          >
            clear cart
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
