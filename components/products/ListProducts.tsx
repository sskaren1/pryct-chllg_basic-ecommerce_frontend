// import next
import Image from "next/image";
// import styled components
import { Container, GridCol3, FlexCol } from './../ui/layout'
import { ButtonCircle } from './../ui/form'
import { Card } from './../ui/surfaces'
import { TextRedProd, TextBold } from './../ui/typography'
// import images
import iconOrdenCompleta from "./../../public/images/icon_orden_completa.png";
import iconPlus from "./../../public/images/icon_plus.png";

export const ListProducts = () => {
  return (
    <>
        <Card>
            <Container>
              <GridCol3>
                <Image src={iconOrdenCompleta.src} width={300} height={200} alt="order complete" />
                <FlexCol>
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
                <Image src={iconOrdenCompleta.src} width={300} height={200} alt="order complete" />
                <FlexCol>
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
                <Image src={iconOrdenCompleta.src} width={300} height={200} alt="order complete" />
                <FlexCol>
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
