import { myProductsDB } from "./products/product.db";
import { IProductDetails } from "./products/product-details.interface";
import { ProductManagementService } from "./products/product.service";

function main() {
  const productManagementService = new ProductManagementService(myProductsDB);

  const newProduct: IProductDetails = {
    name: "The Soft skills software developer's manual",
    category: "Books",
    status: "Discontinued",
    price: 70000,
  };
  productManagementService.addProduct(newProduct);
}

main();
