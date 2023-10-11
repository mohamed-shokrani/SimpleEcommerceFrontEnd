export interface IProduct {
  productCode: number;
  minimumQuantity: number;
  name: string;
  description: string;
  price: number;
  discountRate: number;
  pictureUrl: string;
  productCategoryId: number;
  productCategory: {
    id: number;
    name: string;
  };
}
