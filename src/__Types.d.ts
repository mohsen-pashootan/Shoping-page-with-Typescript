type ROOTSTATE = {
  products: ProductsData[];
  selectedItems: ProductsData[];
  cartItems: number;
  sum: [];
  totalSum: number;
  selectedDetail: ProductsData[];
  loading: false;
};

type ProductsData = {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
};

type Item = {
  item: ProductsData;
};

interface ParamTypes {
  id: string;
}
