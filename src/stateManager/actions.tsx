import { getProductDetail, getProductItems } from "../server/server";

function actionCreator(type: string, payload: unknown) {
  return {
    type,
    payload,
  };
}

export function getInitData() {
  return function (dispatch) {
    dispatch(actionCreator("LOADING", null));
    getProductItems().then((products) =>
      dispatch({ type: "DATA_LOADED", payload: products })
    );
  };
}

export function getDetailData(id: string) {
  return function (dispatch) {
    dispatch(actionCreator("LOADING", null));
    getProductDetail(id).then((detail) =>
      dispatch(actionCreator("PRODUCT_DETAIL_LOADED", detail))
    );
  };
}

export const productAddedToCart = (id: string) =>
  actionCreator("PRODUCT_ADDED_TO_CART", id);
export const detailAddedToCart = () =>
  actionCreator("DETAIL_ADDED_TO_CART", null);
export const itemIncreased = (id: string) =>
  actionCreator("PRODUCT_ADDED_TO_CART", id);
export const itemDecreased = (id: string) =>
  actionCreator("ITEM_DECREASED", id);
export const removeItem = (id: string) => actionCreator("REMOVE_ITEM", id);
export const clearCart = () => actionCreator("CLEAR_CART", null);
export const selectedDetail = (id: string) =>
  actionCreator("SELECTED_DETAIL", id);
