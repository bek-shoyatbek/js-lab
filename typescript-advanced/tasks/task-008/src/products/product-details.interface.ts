export type ProductCategory =
  | "Electronics"
  | "Clothing"
  | "Furniture"
  | "Books"
  | "Beauty";

export type ProductStatus = "In Stock" | "Out of Stock" | "Discontinued";

export interface IProductDetails {
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  price: number;
}
