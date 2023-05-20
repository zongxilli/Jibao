import styled from 'styled-components';
import tw from 'twin.macro';

export const SwitchInput = styled.input`
  ${tw`h-0 w-0 display[none]`}
`;

export const SwitchLabel = styled.label`
  ${tw`relative h-8 w-16
  flex items-center justify-between
  border-radius[2rem]
  cursor-pointer
  `}
  background: ${(props) => props.theme.colors.twText};
`;

export const Switch = styled.span`
  ${tw`absolute h-7 w-7 top-0.5 left-0.5
  flex items-center justify-center
  border-radius[2rem]`}

  transition: 0.4s;
  background: ${(props) => props.theme.colors.twBackground};
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 0.125rem);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: calc(100% - 0.25rem);
  }
`;