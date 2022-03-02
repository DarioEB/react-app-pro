// React
import { useContext } from "react";
// Contexto
import { ProductContext } from "./ProductCard";
// Estilos
import styles from "../styles/styles.module.css"; 
// Interface
import { ProductButtonsProps } from "../interfaces/interfaces"; 


export const ProductButtons = ({className, style}: ProductButtonsProps) => { 

  const {increaseBy, counter} = useContext(ProductContext);

  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button
        className={styles.buttonMinus}
        onClick={() => increaseBy(-1)}
      >-</button>

      <div className={styles.countLabel}>
        {counter}
      </div>

      <button
        className={styles.buttonAdd}
        onClick={() => increaseBy(+1)}
      >+</button>
    </div>
  )
}