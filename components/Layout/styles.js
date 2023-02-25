import Link from "next/link";
import styled, { css } from "styled-components";
import Col from "./col";
// MUTAUL STYLES START
export const Img = styled.div`
	width: 123px;
	min-width: 123px;
	height: 32px;
	margin-right: 24px;
	position: relative;
	img {
		position: absolute;
	}
`;
// MUTAUL STYLES ENDS
export const LayoutWrapper = styled.div`
	${({ theme: { breakPoints } }) =>
		css`
			.hidden-sm {
				display: none;
			}
			@media (max-width: ${breakPoints["sm"]}px) {
				.hide-sm {
					display: none;
				}
				.hidden-sm {
					display: flex;
				}
			}
		`}
`;
// HEADER STYLED START

export const Header = styled.nav`
	display: flex;
	align-items: center;
	padding: 24px 0 20px 0;

	${({ theme: { breakPoints } }) =>
		css`
			border-bottom: 1px solid ${(props) => props.theme.colors.border};
			@media (max-width: ${breakPoints["sm"]}px) {
				border-bottom: 1px solid ${(props) => props.theme.colors.white_500};
				padding: 32px 0 24px 0;
				justify-content: space-between;
			}
		`}
`;
export const HeaderWrapper = styled.div`
	width: 100%;
	.nav-icons {
		min-width: 18px;
	}

	${({ theme: { breakPoints } }) =>
		css`
			@media (max-width: ${breakPoints["sm"]}px) {
				position: absolute;
			}
		`}
`;
export const ThemeIcon = styled.div`
	height: 26px;
	width: 26px;
	min-height: 26px;
	min-width: 26px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ theme: { colors } }) => css`
		background: ${colors.border};
	`}
`;

// HEADER STYLED ENDS

// FOOTER STYLES START
export const FooterWrapper = styled.footer`
	padding-top: 42px;
	${({ theme: { colors, breakPoints } }) => css`
		background-color: ${colors.dark};
		@media (max-width: ${breakPoints.xs}px) {
			padding-top: 0;
		}
	`}
`;
export const FlexContent = styled.div`
	display: block;

	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			display: flex;
			flex-wrap: wrap;
			gap: 12px 0;
			max-width: 316px;
			justify-content: space-between;
		}
	`}
`;
export const FlexIcons = styled.div`
	display: flex;
	width: 100%;
	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			justify-content: space-evenly;
		}
	`}
`;
export const FlexBox = styled.div`
	display: block;
	.icon {
		margin-right: 8px;
	}
	${({ theme: { colors, breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			display: flex;
			// .icon {
			// 	margin-left: 40px;
			// }
		}
	`}
`;
export const FooterFlex = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: ${({ theme: { breakPoints } }) => breakPoints.xs}px) {
		height: auto;
		flex-direction: row;
		justify-content: start;
		height: 34px;
	}
`;
export const FooterTitle = styled.h3`
	font-weight: 400;
	text-transform: uppercase;
	margin-bottom: 20px;
	line-height: 15px;
	${({ theme: { fontSize, colors, breakPoints } }) => css`
		font-size: ${fontSize.sm};
		color: ${colors.white};
		@media (max-width: ${breakPoints.xs}px) {
			margin-right: 4px;
			min-width: max-content;
		}
	`}
`;
export const FooterInfo = styled.p`
	font-weight: 400;
	height: auto;
	line-height: 15px;
	${({ theme: { fontSize, colors } }) => css`
		font-size: ${fontSize.sm};
		color: ${colors.light_grey};
	`}
`;
export const FooterDesc = styled.p`
	font-weight: 400;
	line-height: 19px;
	margin-top: 40px;
	width: 163px;
	${({ theme: { fontSize, colors, breakPoints } }) => css`
		font-size: ${fontSize.base};
		color: ${colors.light_grey};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize.md};
			margin-top: 0px;
			padding-left: 28px;
			display: flex;
			align-items: center;
			height: 34px;
			position: relative;
			&::before {
				bottom: -21px;
				content: "";
				position: absolute;
				height: calc(100% + 21px);
				left: 0;
				width: 0;
				border-right: 1px solid rgba(189, 189, 189, 0.5);
			}
		}
	`}
`;
export const FooterLink = styled(Link)`
	font-weight: 400;
	line-height: 22px;
	display: block;
	text-decoration: none;

	${({ theme: { fontSize, colors, breakPoints } }) => css`
		font-size: ${fontSize.sm};
		color: ${colors.light_grey};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize.md};
			min-width: max-content;
			border-left: 1px solid #8d8d8d;
			padding: 0 20px;
			&:first-of-type,
			&:nth-of-type(3) {
				padding-left: 0;
				border-left: none;
			}
		}
	`}
`;
export const FooterCol = styled(Col)`
	margin-top: 60px;
	position: relative;
	padding: 0 0 24px;
	height: calc(100% - 58px);
	box-sizing: border-box;
	border-bottom: 1px solid rgba(189, 189, 189, 0.5);

	@media (max-width: ${({ theme: { breakPoints } }) => breakPoints.xs}px) {
		display: block;
		height: auto;
		margin-top: 28px;
		padding-bottom: 20px;
		.footer_logo {
			width: 138px;
		}
	}
	@media (max-width: 8000px) and (min-width: ${({ theme: { breakPoints } }) =>
			breakPoints.md}px) {
		padding: 0 24px 24px;
		&:first-of-type {
			padding-left: 0;
		}
		&:last-child {
			padding-right: 0;
		}
		&:first-of-type {
			width: 202px !important;
		}
		&:nth-child(2) {
			width: 219px !important;
			padding-left: 36px;
		}
		&:nth-child(3) {
			width: 194px !important;
			padding-left: 36px;
		}
		&:nth-child(4) {
			width: 249px !important;
			padding-left: 64px;
		}
		&:last-child {
			padding-left: 64px;
		}
	}
	@media (max-width: ${({ theme: { breakPoints } }) => breakPoints.sm}px) {
		border-right: none;
	}
	@media (max-width: ${({ theme: { breakPoints } }) =>
			breakPoints.md}px) and (min-width: ${({ theme: { breakPoints } }) =>
			breakPoints.xs}px) {
		border-right: 1px solid rgba(189, 189, 189, 0.5);

		&:nth-child(2) {
			padding-left: 36px;
		}
		&:nth-child(4) {
			padding-left: 36px;
		}
		&:last-child,
		&:nth-child(2),
		&:nth-child(4) {
			border-right: none;
		}
	}
	@media (max-width: 8000px) and (min-width: ${({ theme: { breakPoints } }) =>
			breakPoints.md}px) {
		border-right: 1px solid rgba(189, 189, 189, 0.5);
		&:last-child {
			border-right: none;
		}
	}
`;
// FOOTER STYLES ENDS

export const Flex = styled.div`
	display: flex;
	gap: 18px;
	margin-left: 36px;
`;
