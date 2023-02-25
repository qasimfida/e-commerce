import styled, { css } from "styled-components";

export const ProductsContainerWrapper = styled.div`
	${({ theme: { colors, breakPoints }, bg }) => css`
		background-color: ${colors[bg]};
		@media (max-width: ${breakPoints["sm"]}px) {
			margin: 0 -16px;
		}
	`}
`;
