import styled, { css } from "styled-components";

export const ChipWrapper = styled.div`
	display: inline-flex;
	position: relative;
	box-sizing: border-box;
	padding: 0 10px;
	height: 48px;
	align-items: center;
	border-radius: 5px;
	line-height: 29px;
	${({ theme: { colors, fontSize, font, breakPoints } }) => css`
		color: ${colors.black};
		border: 1px solid ${colors.black};
		font-size: ${fontSize["3xl"]};
		font-family: ${font.base};
		@media (max-width: ${breakPoints["sm"]}px) {
			font-size: ${fontSize["lg"]};
			height: 42px;
		}
	`}
`;

export const Sup = styled.div`
	line-height: 15px;
	position: relative;
	top: -12px;
	right: -2px;
	${({ theme: { colors, fontSize, font, breakPoints } }) => css`
		color: ${colors.black_3};
		font-size: ${fontSize.sm};
		font-family: ${font.base};
		display: inline;
		@media (max-width: ${breakPoints["sm"]}px) {
			display: none;
		}
	`}
`;
