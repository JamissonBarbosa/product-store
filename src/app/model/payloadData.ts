import { Product } from "./productData";

export type ProductPayloadData = Omit<Product, 'id'>