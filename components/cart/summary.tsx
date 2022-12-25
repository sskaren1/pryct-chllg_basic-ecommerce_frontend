// import next
import Image from "next/image";
// import images
import cartBlue from "./../../public/images/icon_carrito-azul.png";
// import styles components
import { PropsFlex, Container, Flex, BoxAuto } from "./../ui/layout";
import { Button } from "./../ui/form";
// import css modules
import styles from './summary.module.css';

type Props = {
  disabled: boolean;
};

export const Summary = ({ disabled }: Props, { height, justifyContent }: PropsFlex) => {
  return (
    <div className={styles.summary}>
      <div className={styles.date}>
        <Image src={cartBlue.src} width={300} height={200} alt="order cart" />
        <p className={styles.text}>Buy now and get it by <span>05/24/19</span></p>
      </div>
      <BoxAuto className={styles.details}>
        <Container>
          <Flex height={"auto"} justifyContent={""} className={styles.detailsList} >
            <span>Products:</span>
            <span> $0.00</span>
          </Flex>
          <Flex height={"auto"} justifyContent={""} className={`${styles.detailsList} ${styles.bg}`} >
            <span className={styles.bold}>Shipping Cost:</span>
            <span> $0.00</span>
          </Flex>
          <Flex height={"auto"} justifyContent={""} className={styles.detailsList} >
            <span >Taxes:</span>
            <span > $0.00</span>
          </Flex>
          <Flex height={"auto"} justifyContent={""} >
            <span className={styles.bold}>Total:</span>
            <span className={`${styles.bold} ${styles.red}`}> $0.00</span>
          </Flex>
        </Container>
      </BoxAuto>
      <Button disabled={disabled}>
        COMPLETE ORDER
      </Button>
    </div>
  );
};
