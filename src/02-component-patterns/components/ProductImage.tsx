// React
import { useContext } from 'react';
// Context
import { ProductContext } from './ProductCard';
// Imagen por defecto
import noImage from '../assets/no-image.jpg';
// Estilos
import styles from "../styles/styles.module.css";
// Interface Props
import { ProductImageProps } from '../interfaces/interfaces';


export const ProductImage = ({ img, className, style }: ProductImageProps ) => {

  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) { imgToShow = img;
  } else if (product.img) { imgToShow = product.img;
  } else { imgToShow = noImage; }

  return (
    <img
      className={` ${styles.productImg} ${className} `}
      src={imgToShow}
      alt="product image"
      style={style}
    />
  );
}