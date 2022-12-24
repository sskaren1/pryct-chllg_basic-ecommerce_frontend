// import styled components
import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
`
export const ContainerFlexCol = styled.div`
    width: 90%;
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export const Box = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--neutral-2);
`
export const BoxAuto = styled.div`
    width: 100%;
    height: auto;
    background-color: var(--neutral-2);
`
export const GridCol = styled.div`
    display: grid;
    grid-template-rows: unset;
    column-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;//para centrar verticalmente
    justify-items: center;//para centrar horizontalmente
    grid-auto-flow: column;  
`
export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between; 
    align-items:center;
`
export const FlexGap = styled.div`
    display: flex;
    align-items:center;
    column-gap: 1rem;
`