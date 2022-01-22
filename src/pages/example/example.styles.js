import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledPage = styled.div`
	${tw`w-screen h-screen flex flex-col gap-12 items-center justify-center`}
	background-color: ${(props) => props.theme.colors.twBackground};
`;

export const StyledHeader = styled.h1`
	${tw`text-3xl`}
	color: ${(props) => props.theme.colors.twText}
`;

export const StyledButton = styled.button`
	${tw`w-32 h-12 rounded-lg drop-shadow-2xl`}
	background-color: ${(props) => props.theme.colors.twIndigo};
	color: ${(props) => props.theme.colors.twText};
`;
