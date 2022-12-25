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
export const TextCenter = styled.p`
  text-align: center;
`;
export const TextBold = styled.p`
  font-weight: var(--semi-bold);
`;
export const TextRedProd = styled.p`
  font-weight: var(--semi-bold);
  color: var(--color-4);
  font-size: 2.6rem;
`;
