import styled, { css } from "styled-components";

export const TitleBarWrapper = styled.div`
	${({ theme: { colors, breakPoints }, border }) =>
		border &&
		css`
			border-bottom: 1px solid ${colors.black};
		`};
	${({ theme: { colors, breakPoints }, border }) => css`
		height: 66px;
		@media (max-width: ${breakPoints.xs}px) {
			height: 30px;
			margin-bottom: ${border ? "20px" : "18px"}!important;
			padding-bottom: ${border ? "14px" : "0px"}!important;
			padding-top: 0 !important;
		}
	`};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeadingWrapper = styled.h2`
	${({ theme: { colors, fontSize, font, breakPoints } }) => css`
		line-height: 44px;
		font-size: ${fontSize["5xl"]};
		font-family: ${font.bold};
		color: ${colors.black};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize["3xl"]};
			line-height: 29px;
		}
	`}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	background: transparent;
	border: none;
	cursor: pointer;
	font-weight: 400;
	line-height: 29px;
	${({ theme: { colors, fontSize, breakPoints } }) => css`
		font-size: ${fontSize["3xl"]};
		color: ${colors.black};
		@media (max-width: ${breakPoints.xs}px) {
			span {
				display: none;
			}
			svg {
				width: 21px;
				height: 26px;
			}
		}
	`}
`;
