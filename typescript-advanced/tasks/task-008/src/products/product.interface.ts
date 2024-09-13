import { IProductDetails, ProductCategory } from "./product-details.interface";

export interface IProduct {
    addProduct(product: IProductDetails): string;
    filterProductsByCategory(
      products: IProductDetails[],
      category: ProductCategory
    ): IProductDetails[];
    isProductAvailable(product: IProductDetails): boolean;
  }