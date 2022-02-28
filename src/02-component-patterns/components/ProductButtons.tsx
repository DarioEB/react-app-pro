// React
import { useContext } from "react";
// Contexto
import { ProductContext } from "./ProductCard";
// Estilos
import styles from "../styles/styles.module.css"; 

export const ProductButtons = () => { 

  const {increaseBy, counter} = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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