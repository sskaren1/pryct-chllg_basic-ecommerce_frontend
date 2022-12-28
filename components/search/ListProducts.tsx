// import next
import Image from "next/image";
// import images
import iconCompleteOrder from "./../../public/images/icon_orden_completa.png";
import iconPlus from "./../../public/images/icon_plus.png";
// import styled components
import { PropsFlex, Container, GridCol3, FlexCol } from './../ui/layout';
import { ButtonCircle } from './../ui/form';
import { Card } from './../ui/surfaces';
import { TextRedProd, TextBold } from './../ui/typography';


export const ListProducts = ({ justifyContent, height }: PropsFlex) => {
  // console.log(products);

  return (
    <>
        <Card>
            <Container>
              <GridCol3>
                <Image src={"https://i.ibb.co/X7793Mx/yogurt-gloria.jpg"} width={300} height={200} alt="complete order" />
                <FlexCol height={"auto"} justifyContent={""}>
                  <TextBold>Yogurt Laive</TextBold>
                  <TextRedProd>$100.00</TextRedProd>
                </FlexCol>
                <ButtonCircle>
                  <Image src={iconPlus.src} width={100} height={100} alt="icon plus" />
                </ButtonCircle>
              </GridCol3>
            </Container>
        </Card>
        <Card>
            <Container>
              <GridCol3>
                <Image src={iconCompleteOrder.src} width={300} height={200} alt="complete order" />
                <FlexCol height={""} justifyContent={""}>
                  <TextBold>Yogurt Laive</TextBold>
                  <TextRedProd>$100.00</TextRedProd>
                </FlexCol>
                <ButtonCircle>
                  <Image src={iconPlus.src} width={100} height={100} alt="icon plus" />
                </ButtonCircle>
              </GridCol3>
            </Container>
        </Card>
        <Card>
            <Container>
              <GridCol3>
                <Image src={iconCompleteOrder.src} width={300} height={200} alt="complete order" />
                <FlexCol height={""} justifyContent={""}>
                  <TextBold>Yogurt Laive</TextBold>
                  <TextRedProd>$100.00</TextRedProd>
                </FlexCol>
                <ButtonCircle>
                  <Image src={iconPlus.src} width={100} height={100} alt="icon plus" />
                </ButtonCircle>
              </GridCol3>
            </Container>
        </Card>
    </>
  )
}
