import Products from "../products.json";

const productItems = [...Products.items];

type Product_Data = {
  sys: Sys;
  fields: Fields;
};

type Sys = {
  id: string;
};

type Fields = {
  title: string;
  description: string;
  price: number;
  image: Image;
};

type Image = {
  fields: Fields2;
};

type Fields2 = {
  file: File;
};

type File = {
  url: string;
};

export function getProductItems() {
  return fakeApiCall(productItems);
}

export function getProductDetail(id: string) {
  return fakeApiCall(productItems).then((data: Product_Data[]) =>
    data.find((item) => item.sys.id === id)
  );
}

function fakeApiCall(values: Product_Data[]) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(values);
    }, 500);
  });
}
