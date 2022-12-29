// import styled components
import styled from "styled-components";
export interface PropsButton {
    backgroundColor: string;
    border: string;
    color: string;
    disabled: boolean;
}

export const Button = styled.button<PropsButton>`
    width: 100%;
    padding: 1.5rem 1rem;
    border-radius: 0.5rem;    
    /* background-color: var(--color-7); */
    background-color: ${(props) => (props.disabled ? "#f7f7f7" : "#ff8000")};
    /* border: 1px solid var(--color-8); */
    border: ${(props) => (props.disabled ? "1px solid #dddddd" : "1px solid #ff8000")};
    /* color: var(--color-9); */
    color: ${(props) => (props.disabled ? "#c1c1c1" : "#ff8000")};
`
export const ButtonCircle = styled.button`
    width: 5rem;
    height: 5rem;
    padding: 1rem 1rem;
    background-color: var(--color-5);
    border: 1px solid var(--color-5);
    color: var(--neutral-2);
    font-size: 2rem;
    border-radius: 50%;    
`
export const Input = styled.input`
    width: 100%;
    padding: 1rem 1rem;
    border: 1px solid var(--color-8);
    border-radius: 0.5rem;
`