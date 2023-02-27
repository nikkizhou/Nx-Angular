export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface Product {
  id: number | null;
  productName: string;
  productCode: string;
  description: string;
  starRating: number;
}
