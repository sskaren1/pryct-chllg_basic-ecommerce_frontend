// import styled components
import {
  PropsContainer,
  ContainerFlexCol,
} from "./layout";
import { PropsTyph, Text } from "./typography";

export const FullScreenLoading = (
  { textAlign, fontWeight, color, fontSize }: PropsTyph,
  { rowGap }: PropsContainer
) => {
  return (
    <>
        <ContainerFlexCol rowGap={""}>
          <Text textAlign={""} fontWeight={600} color={"#0500FF"} fontSize={"5rem"}>
            Loading...
          </Text>
        </ContainerFlexCol>
    </>
  );
};

