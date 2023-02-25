import styled, { css } from "styled-components";
import { AngleDown, Heart } from "../../components/Icons";

export const Wrapper = styled.div`
	padding: 40px 0;
	${({ theme: { breakPoints } }) =>
		css`
			@media (max-width: ${breakPoints["sm"]}px) {
				padding-top: 166px;
				padding-bottom: 0;
			}
		`}
`;
export const CollapseIcon = styled(AngleDown)`
	transition: 0.3s all ease;
	display: none;
	stroke-width: 1px;
`;
export const Flex = styled.div`
	display: flex;
`;
export const Collapse = styled(Flex)`
	overflow: hidden;
	padding: 0;
	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.sm}px) {
			flex-direction: column;
		}
	`}
`;
export const JustifyBetween = styled(Flex)`
	justify-content: space-between;
	${({ theme: { breakPoints } }) => css`
		.mobile-collapse {
			@media (max-width: ${breakPoints.sm}) {
				display: none;
			}
		}
	`}
`;
export const Icon = styled(Heart)``;
export const Img = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
`;
export const ProductCover = styled.div`
	${({ theme: { colors, breakPoints } }) => css`
		border: 1px solid ${colors.grey};
		@media (max-width: ${breakPoints.sm}px) {
			height: 433px;
			width: auto;
			padding: 52px 48px 48px 52px;
			margin-bottom: 28px;
			border-radius: 8px;
		}
	`};
	border-radius: 15px;
	height: 828px;
	position: relative;
	box-sizing: border-box;
	padding: 98px 96px 92px;
	margin-bottom: 92px;
	${Icon} {
		position: absolute;
		top: 24px;
		right: 30px;
	}
`;
export const BreadCrum = styled.div`
	line-height: 17px;
	padding: 0 0 16px;
	margin-bottom: 24px;
	${({ theme: { colors, fontSize, breakPoints } }) => css`
		color: ${colors.light_grey};
		font-size: ${fontSize.md};
		border-bottom: 1px solid ${colors.light_grey};
		@media (max-width: ${breakPoints.xs}) {
			line-height: 12px;
			font-size: ${fontSize["xs"]};
		}
	`};
`;
export const DetailsWrapper = styled(Flex)`
	flex-direction: column;
`;
export const Chip = styled.div`
	height: 19px;
	display: inline-flex;
	padding: 0 6px;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	width: max-content;
	${({ theme: { colors, fontSize, font, breakPoints } }) => css`
		background: ${colors.purple};
		color: ${colors.black};
		font-size: ${fontSize.md};
		font-family: ${font.bold};
		@media (max-width: ${breakPoints.sm}px) {
			height: 14px;
			padding: 0 4px;
			font-size: ${fontSize.xs};
			.start-icon {
				height: 10px;
			}
		}
	`};
	.mr {
		margin-right: 6px;
	}
	margin-bottom: 6px;
`;
export const Title = styled.h2`
	${({ light, theme: { colors, fontSize, font, breakPoints } }) => css`
		@media (max-width: ${breakPoints.sm}px) {
			line-height: 29px;
			font-size: ${fontSize["3xl"]};
		}
		color: ${light ? colors.grey_100 : colors.black};
		font-size: ${fontSize["6xl"]};
		font-family: ${font.bold};
	`};
	line-height: 51px;
`;
export const Text = styled.p`
	line-height: 19px;
	${({
		light,
		height,
		bold,
		theme: { colors, fontSize, font, breakPoints },
	}) => css`
		height: ${height || "26px"};
		color: ${light ? colors.light_grey : colors.black};
		font-size: ${fontSize.base};
		font-family: ${bold ? font.bold : font.base};
		@media (max-width: ${breakPoints.sm}px) {
			line-height: 16px;
			font-size: ${fontSize["md"]};
		}
	`};
`;
export const Specs = styled.div`
	margin-bottom: 92px;
	border-radius: 15px;
	padding: 38px 44px;
	${({ theme: { colors, breakPoints } }) => css`
		background: ${colors.light_gray};
		@media (max-width: ${breakPoints.sm}px) {
			margin-bottom: 16px;
			padding: 22px 22px 16px 30px;
			border-radius: 8px;
		}
	`};
`;
export const Info = styled(Flex)`
	gap: 24px;
	${({ theme: { colors } }) => css`
		background: ${colors.light_gray};
	`};
`;
export const Spec = styled.div`
	width: max-content;
	min-width: 38px;
	${({ theme: { colors, breakPoints } }) => css`
		background: ${colors.light_gray};
		@media (max-width: ${breakPoints.sm}px) {
			svg {
				height: 28px;
				width: 28px;
			}
		}
	`};
`;
export const ColorsWrapper = styled(Flex)`
	align-items: center;
	${({ theme: { colors, breakPoints }, color }) => css`
		border-bottom: 1px solid ${colors.black};
		padding: 52px 0;
		@media (max-width: ${breakPoints.sm}px) {
			padding: 16px 0;
		}
	`}
`;
export const Colors = styled(Flex)`
	align-items: center;
	gap: 6px;
`;
export const Color = styled.div`
	height: 24px;
	width: 24px;
	border-radius: 50%;
	box-sizing: border-box;
	${({ theme: { colors, breakPoints }, color }) => css`
		background: ${colors[color]};
		border: 1px solid ${color === "white" ? colors["black"] : colors[color]};
		@media (max-width: ${breakPoints.sm}px) {
			height: 18px;
			width: 18px;
		}
	`}
`;
export const Price = styled.h4`
	line-height: 44px;
	${({ theme: { colors, fontSize, font, breakPoints } }) => css`
		color: ${colors.black};
		font-size: ${fontSize["5xl"]};
		font-family: ${font.bold};
		margin-top: 32px;
		@media (max-width: ${breakPoints.sm}px) {
			line-height: 29px;
			margin-top: 16px;
			font-size: ${fontSize["3xl"]};
		}
	`}
`;
export const TabsWrapper = styled.div`
	border-radius: 15px;
	${({ theme: { colors, breakPoints } }) => css`
		border: 1px solid ${colors.grey};
		@media (max-width: ${breakPoints.xs}px) {
			border-radius: 8px;
		}
	`}
`;
export const Header = styled.div`
	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			padding: 21px 26px 14px;
		}
	`}
	display: flex;
	padding: 28px 44px 20px;
	align-items: center;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey};
`;
export const TabsTitle = styled(Title)`
	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			padding-right: 20px;
			padding-left: 28px;
			width: auto;
			margin-right: 0;
		}
	`}
	padding: 0 44px;
	margin-right: 10px;
	width: 366px;
	cursor: pointer;
	&:first-of-type {
		border-right: 1px solid ${({ theme: { colors } }) => colors.grey};
		padding-left: 0;
	}
`;
export const TabRow = styled.div`
	box-sizing: border-box;
	padding: 22px 44px;
	min-height: 74px;
	display: flex;
	overflow: hidden;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey};
	&:last-child {
		border-bottom: none;
	}
	transition: height 1s ease;
	${({ open, theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			flex-direction: column;
			padding: 18px 26px 14px 22px;
			min-height: 60px;
			${Collapse} {
				height: ${open ? "auto" : "0px"};
				padding-top: ${open ? "12px" : "0px"};
			}
			${CollapseIcon} {
				display: inline-block;
				transform: rotateX(${open ? "180deg" : "0"});
			}
		}
	`}
`;
export const Cell = styled.div`
	width: 112px;
	min-width: 112px;
	box-sizing: border-box;
	&:last-child {
		width: 100%;
		margin-left: 18px;
	}
	${({ theme: { breakPoints } }) => css`
		@media (max-width: ${breakPoints.sm}px) {
			width: 100%;
		}
		&:last-child {
			margin-left: 0;
		}
	`}
`;

export const TableHeading = styled.div`
	line-height: 24px;
	${({ theme: { colors, font, fontSize, breakPoints } }) => css`
		font-family: ${font.bold};
		font-size: ${fontSize.xl};
		color: ${colors.black};
		@media (max-width: ${breakPoints.sm}px) {
			font-size: ${fontSize.md};
		}
	`}
`;
export const TableText = styled.div`
	line-height: 20px;
	margin-right: 8px;
	${({ bold, fluid, theme: { colors, font, fontSize, breakPoints } }) => css`
		font-family: ${bold ? font.bold : font.normal};
		font-size: ${fontSize.base};
		color: ${colors.black};
		&:first-of-type {
			width: ${fluid ? "100%" : "112px"};
			min-width: ${fluid ? "100%" : "112px"};
		}
		@media (max-width: ${breakPoints.sm}px) {
			font-size: ${fontSize.sm};
		}
	`}
`;
export const TableData = styled(Flex)`
	margin-top: 2px;
	&:last-child {
		margin-bottom: 0;
	}
	margin-bottom: 14px;
	display: flex;
	${({ theme: { breakPoints } }) => css`
		${TableText} {
			@media (max-width: ${breakPoints.sm}px) {
				&:first-of-type {
					width: 76px;
					min-width: 76px;
				}
			}
		}
	`}
`;
