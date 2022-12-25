// import next
import Image from "next/image";
// import images
import iconBolsa from "./../../public/images/icon_bolsa.png";
// import styled components
import { PropsContainer, ContainerFlexCol } from "./../ui/layout";
import { PropsTyph, Text } from "./../ui/typography";

export const EmptyCart = ( { rowGap }:PropsContainer, { textAlign, fontWeight, color, fontSize }: PropsTyph ) => {
  return (
    <ContainerFlexCol rowGap={"1rem"}>
      <Image src={iconBolsa.src} width={200} height={200} alt="basket"/>
      <Text textAlign={"center"} fontWeight={600} color={""} fontSize={"1.5rem"}>
        Your cart is empty
      </Text>
      <Text textAlign={"center"} fontWeight={400} color={""} fontSize={""}>
        Seems lie you havent chosen what to buy...
      </Text>
    </ContainerFlexCol>
  )
}
