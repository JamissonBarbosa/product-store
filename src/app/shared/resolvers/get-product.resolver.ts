import { inject } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


export const getProductResolver = ((route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const productService = inject(ProductService)
  return productService.getProductByID(route.paramMap.get('id') as string)
});