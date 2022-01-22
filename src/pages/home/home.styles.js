import styled from 'styled-components';
import tw from 'twin.macro';

export const Page = styled.div`
	${tw`w-screen h-screen bg-black`}

	color: ${(props) => props.theme.colors.whiteDefault}
`;
