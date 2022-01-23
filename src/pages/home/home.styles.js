import styled from 'styled-components';
import tw from 'twin.macro';

export const Page = styled.div`
	${tw`h-auto w-screen`}

	background-color: ${(props) => props.theme.colors.twBackground}
`;
