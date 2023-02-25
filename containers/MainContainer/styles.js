import styled, { css } from "styled-components";

export const MainContainerWrapper = styled.div`
	${({ theme: { breakPoints, colors }, bg }) => css`
		background-color: ${bg && colors[bg]};
		padding: ${bg && "30px 40px"};
		border-radius: 15px;
		margin-bottom: 40px;
		@media (max-width: ${breakPoints.xs}px) {
			border-radius: 0px;
			padding: ${bg ? "24px 24px 36px" : "15px 24px 35px"}!important;
			margin: 0 -24px;
		}
	`}
	${({ hiddenDown, theme: { breakPoints } }) =>
		hiddenDown &&
		css`
			@media (max-width: ${breakPoints[hiddenDown]}px) {
				display: none;
			}
		`}
`;
