// import styled components
import styled from "styled-components";

export interface PropsTyph {
  textAlign: string;
  fontWeight: number;
  color: string;
  fontSize: string;
}

export const Text = styled.p<PropsTyph>`
  text-align: ${(props) => props.textAlign || `left`};
  font-weight: ${(props) => props.fontWeight || 400 };
  color: ${(props) => props.color || "#333333" };
  font-size: ${(props) => props.fontSize || "1.6rem"};
`;
export const Span = styled.span<PropsTyph>`
  text-align: ${(props) => props.textAlign || `left`};
  font-weight: ${(props) => props.fontWeight || 400 };
  color: ${(props) => props.color || "#333333" };
  font-size: ${(props) => props.fontSize || "1.6rem"};
`;