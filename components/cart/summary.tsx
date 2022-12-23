// import next
import Image from "next/image";
// import images
import cartBlue from "./../../public/images/icon_carrito-azul.png";
// import styles components
import { Container, GridCol, Box } from "./../ui/layout";

export const Summary = () => {
  return (
    <div className="summary">
      <div>
        <Image src={cartBlue.src} width={200} height={200} alt="order cart" />
        <p className="">Buy now and get it by</p>
        <span>05/24/19</span>
      </div>
      <div className="">
        <span className="">Coste total de los articulos:</span>
        <span className=""></span>
      </div>
    </div>
  );
};
