import { CSSProperties } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
  
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}
 
export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}


export interface ProductCardHOCProps {
  (Props: ProductCardProps ): JSX.Element;
  Title: ( Props: ProductTitleProps ) => JSX.Element;
  Image: ( Props: ProductImageProps ) => JSX.Element; 
  Buttons: ( Props: ProductButtonsProps ) => JSX.Element;
}