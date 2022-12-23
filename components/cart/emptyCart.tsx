// import next
import Image from "next/image";
// import images
import iconBolsa from "./../../public/images/icon_bolsa.png";
// import styles
import { ContainerFlexCol } from "./../ui/layout";
import styles from './emptyCart.module.css';

export const EmptyCart = () => {
  return (
    <ContainerFlexCol>
      <Image src={iconBolsa.src} width={200} height={200} alt="basket" className={styles.image}/>
      <p className={styles.title}>Your cart is empty</p>
      <p className={styles.textCenter}>Seems lie you havent chosen what to buy...</p>
    </ContainerFlexCol>
  )
}
