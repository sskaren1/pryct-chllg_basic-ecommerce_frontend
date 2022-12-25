// import next
import Image from "next/image";
// import images
import iconOrdenCompleta from "./../../public/images/icon_orden_completa.png";
import iconPlus from "./../../public/images/icon_plus.png";
import iconMinus from "./../../public/images/icon_minus.png";
// import styled components
import {
  PropsFlex,
  Container,
  GridCol3,
  FlexCol,
  BoxSquare,
  Flex,
} from "./../ui/layout";
import { ButtonCircle } from "./../ui/form";
import { Card } from "./../ui/surfaces";
import { PropsTyph, Text } from "./../ui/typography";
// import css module
import styles from "./fullCart.module.css";

export const FullCart = (
  { justifyContent, height }: PropsFlex ,
  { textAlign, fontWeight, color, fontSize }: PropsTyph
) => {
  return (
    <>
      <Card>
        <Container>
          <GridCol3>
            <Image
              src={iconOrdenCompleta.src}
              width={300}
              height={200}
              alt="order complete"
            />
            <FlexCol height={""} justifyContent={""}>
              <Text
                textAlign={""}
                fontWeight={400}
                color={""}
                fontSize={"1.8rem"}
              >
                Yogurt Laive
              </Text>
              <Text
                textAlign={""}
                fontWeight={600}
                color={"#FF2D55"}
                fontSize={"2.6rem"}
              >
                $100.00
              </Text>
            </FlexCol>
            <FlexCol height={""} justifyContent="space-around">
              <ButtonCircle>1</ButtonCircle>
              <button className={styles.btnDelete}>delete</button>
            </FlexCol>
          </GridCol3>
        </Container>
      </Card>
      <Card>
        <Container>
          <GridCol3>
            <Image
              src={iconOrdenCompleta.src}
              width={300}
              height={200}
              alt="order complete"
            />
            <FlexCol height={""} justifyContent={""}>
              <Text textAlign={""} fontWeight={400} color={""} fontSize={""}>
                Yogurt Laive
              </Text>
              <Text
                textAlign={""}
                fontWeight={600}
                color={"#FF2D55"}
                fontSize={"2.6rem"}
              >
                $100.00
              </Text>
            </FlexCol>
            <BoxSquare>
              <Flex height={"auto"} justifyContent={""}>
                <button>
                  <Image
                    src={iconMinus.src}
                    width={100}
                    height={100}
                    alt="icon minus"
                  />
                </button>
                <Text
                  textAlign={""}
                  fontWeight={400}
                  color={"#fff"}
                  fontSize={"2rem"}
                >
                  5
                </Text>
                <button>
                  <Image
                    src={iconPlus.src}
                    width={100}
                    height={100}
                    alt="icon plus"
                  />
                </button>
              </Flex>
            </BoxSquare>
          </GridCol3>
        </Container>
      </Card>
    </>
  );
};
