import React from "react";
import styles from "./products.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productAddedToCart } from "../stateManager/actions";

export default function Products({ item }: Item) {
  const dispatch = useDispatch();

  function handleItemClick(id: string) {
    dispatch(productAddedToCart(id));
  }

  return (
    <article className={styles["product"]}>
      <div className={styles["img-container"]}>
        <img
          className={styles["product-img"]}
          src={item.image}
          alt={item.title}
        />
        <button
          className={styles["bag-btn"]}
          onClick={() => handleItemClick(item.id)}
        >
          <i className="fas fa-shopping-cart"></i>Add to cart
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
      <Link
        className={styles["to-detail"]}
        to={`/productDetail/${item.id}`}
      >
        <h3>{item.title}</h3>
      </Link>
    </article>
  );
}
