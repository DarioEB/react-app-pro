// React
import { useCallback, useContext } from "react";
// Contexto
import { ProductContext } from "./ProductCard";
// Estilos
import styles from "../styles/styles.module.css"; 
// Interface
import { ProductButtonsProps } from "../interfaces/interfaces"; 


export const ProductButtons = ({className, style}: ProductButtonsProps) => { 

  // TODO: maxCount
  const {increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );
  // TODO: isMaxReached = useCallback, [ counter, maxCount ]
  
  // TRUE si el count === maxCount

  // FALSE si no lo es

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
        className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >+</button>
    </div>
  )
}