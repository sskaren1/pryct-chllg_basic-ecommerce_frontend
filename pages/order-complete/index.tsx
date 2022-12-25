// import react
import { FC } from "react";
// import next
import Head from "next/head";
import Image from "next/image";
// import images
import iconCompleteOrder from "./../../public/images/icon_orden_completa.png";
// import styled components
import { PropsContainer, Main, ContainerFlexCol } from "./../../components/ui/layout";
import { PropsTyph, Text, Span } from "./../../components/ui/typography";


const OrderComplete = ({ textAlign, fontWeight, color, fontSize }: PropsTyph, { rowGap }:PropsContainer ) => {
  return (
    <>
      <Head>
        <title>Riqra Shop - Order</title>
        <meta name="description" content='Tienda Online Riqra' />
        <meta name="og:title" content='Riqra Shop - Order'/>
        <meta name="og:description" content='Tienda Online Riqra' />
      </Head>

      <Main>
        <ContainerFlexCol rowGap={"2rem"}>
          <Text textAlign={""} fontWeight={600} color={""} fontSize={"3.2rem"}>
            Thank you
          </Text>
          <Text textAlign={""} fontWeight={400} color={""} fontSize={""}>
            Your order <Span textAlign={""} fontWeight={600} color={""} fontSize={"1.4rem"}>P0001</Span> has been registered
          </Text>
          <button>
            <Text textAlign={""} fontWeight={600} color={"#0500FF"} fontSize={"1.4rem"}>
              Continue shopping
            </Text>
          </button>
          <Image src={iconCompleteOrder.src} width={300} height={200} alt="complete order" />
        </ContainerFlexCol>
      </Main>
    </>
  );
};

export default OrderComplete;
