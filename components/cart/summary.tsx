// import next
import Image from "next/image";
// import images
import cartBlue from "./../../public/images/icon_carrito-azul.png";
// import styles components
import { Container, Flex, BoxAuto } from "./../ui/layout";
import { Button } from "./../ui/form";
// import css modules
import styles from './summary.module.css';

export const Summary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.date}>
        <Image src={cartBlue.src} width={300} height={200} alt="order cart" />
        <p className={styles.text}>Buy now and get it by <span>05/24/19</span></p>
      </div>
      <BoxAuto className={styles.details}>
        <Container>
          <Flex className={styles.detailsList} >
            <span>Products:</span>
            <span> $0.00</span>
          </Flex>
          <Flex className={`${styles.detailsList} ${styles.bg}`} >
            <span className={styles.bold}>Shipping Cost:</span>
            <span> $0.00</span>
          </Flex>
          <Flex className={styles.detailsList} >
            <span >Taxes:</span>
            <span > $0.00</span>
          </Flex>
          <Flex >
            <span className={styles.bold}>Total:</span>
            <span className={`${styles.bold} ${styles.red}`}> $0.00</span>
          </Flex>
        </Container>
      </BoxAuto>
      <Button>
        COMPLETE ORDER
      </Button>
    </div>
  );
};
