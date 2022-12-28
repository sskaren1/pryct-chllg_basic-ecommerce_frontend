// import styled components
import styled from "styled-components";

export interface PropsFlex {
  justifyContent: string;
  height: string;
}
export interface PropsContainer {
  rowGap: string;
}

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-1);
  padding: 3rem 0;
`;
export const Container = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;
export const ContainerFlexCol = styled.div<PropsContainer>`
  width: 90%;
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${(props) => props.rowGap};
`;
export const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--neutral-2);
`;
export const BoxSquare = styled.div`
    width: 18rem;
    height: 5rem;
    padding: 1rem 2rem;
    background-color: var(--color-5);
    border: 1px solid var(--color-5);
    color: var(--neutral-2);
    border-radius: 0.5rem;  
`
export const BoxAuto = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--neutral-2);
`;
export const GridCol2 = styled.div`
  display: grid;
  grid-template-rows: unset;
  column-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center; //para centrar verticalmente
  justify-items: center; //para centrar horizontalmente
  grid-auto-flow: column;
`;
export const GridCol3 = styled.div`
  display: grid;
  grid-template-rows: unset;
  column-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: center; //para centrar verticalmente
  justify-items: center; //para centrar horizontalmente
  grid-auto-flow: column;
`;
export const Flex = styled.div<PropsFlex>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;
`;
export const FlexCol = styled.div<PropsFlex>`
  width: 100%;
  height: ${(props) => props.height || "100%"};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: left;
`;
export const FlexGap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
