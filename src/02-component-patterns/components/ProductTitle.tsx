// React
import { useContext } from "react";
// Contexto
import { ProductContext } from "./ProductCard";
// Estilos
import styles from "../styles/styles.module.css"; 

export const ProductTitle = ({ title }: { title?: string }) => {

  const { product } = useContext(ProductContext); 

  return (
    <span
      className={styles.productDescription}
    >
      {title ? title : product.title}
    </span>
  )
} 