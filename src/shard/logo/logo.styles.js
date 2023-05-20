import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  /* transform */
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const TextEngName = styled.div`
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: ${(props) => props.theme.colors.twText};
`;
