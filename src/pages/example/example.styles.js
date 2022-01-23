import styled from 'styled-components';
import tw from 'twin.macro';

export const Page = styled.div`
	${tw`w-screen h-screen flex flex-col gap-40 items-center justify-center`}
	background-color: ${(props) => props.theme.colors.twBackground};
`;

export const HeaderWrapper = styled.div`
	${tw`h-32 px-12 flex items-center justify-center rounded-3xl`}
	transform:
    rotateX(51deg)
    rotateZ(43deg);
	transform-style: preserve-3d;

	box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
		28px 28px 28px 0 rgba(34, 33, 81, 0.25);
	transition: 0.4s ease-in-out transform, 0.4s ease-in-out box-shadow;

	&:hover {
		transform: translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg);
		box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
			54px 54px 28px -10px rgba(34, 33, 81, 0.15);
	}
`;

export const TextSpan = styled.span`
	${tw`text-4xl`}
	color: ${(props) => props.theme.colors.twText}
`;

export const Button = styled.button`
	${tw`w-32 h-12 rounded-lg drop-shadow-2xl hover:scale-105 active:scale-95 transition-all`}
	background-color: ${(props) => props.theme.colors.twIndigo};
	color: ${(props) => props.theme.colors.twText};
`;
