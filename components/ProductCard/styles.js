import Link from "next/link";
import styled, { css } from "styled-components";
export const Img = styled.div`
	position: relative;
`;
export const ProductCardWrapper = styled(Link)`
	${({ theme: { colors, breakPoints }, bg, size }) => css`
		background: ${bg ? colors["light_gray"] : colors.white};
		border: 1px solid ${colors.border};
		padding: ${size == "small" ? "17px" : "28px"};
		text-decoration: none;
		${Img} {
			overflow: hidden;
			width: ${size == "small" ? 122 : size == "medium" ? 192 : 237}px;
			height: ${size == "small" ? 144 : size == "medium" ? 237 : 331}px;
			max-width: ${size == "small" ? 122 : size == "medium" ? 192 : 237}px;
			max-height: ${size == "small" ? 144 : size == "medium" ? 237 : 331}px;
			margin: 0 auto;
		}
		@media (max-width: ${breakPoints.xs}px) {
			padding: 12px;
			${Img} {
				margin: 10px auto;
				width: 106px;
				height: 154px;
			}
			.product-fav {
				height: 12px;
				width: 14px;
				right: 8px !important;
				top: 12px !important;
			}
		}
	`};
	display: inline-block;
	border-radius: 15px;
	min-width: 100%;
	box-sizing: border-box;
	position: relative;
	& .product-fav {
		position: absolute;

		cursor: pointer;
		${({ size }) => css`
			top: ${size == "small" ? "14px" : size == "medium" ? "15px" : "24px"};
			right: ${size == "small" ? "14px" : size == "medium" ? "15px" : "24px"};
		`};
	}
`;

export const Body = styled.div``;

export const Title = styled.div`
	font-weight: 700;
	line-height: 39px;
	${({ theme: { colors, fontSize, breakPoints }, size }) => css`
		color: ${colors.black};
		font-size: ${size == "small"
			? fontSize.md
			: size == "medium"
			? fontSize.lg
			: fontSize["4xl"]};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize.md};
			line-height: 17.5px;
		}
	`};
`;

export const Separator = styled.div`
	border-bottom: 1px solid #cfcfcf;
	${({ theme: { colors, fontSize, breakPoints }, size }) => css`
		@media (max-width: ${breakPoints.xs}px) {
			margin: 7px auto !important;
		}
	`};
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Price = styled.div`
	${({ theme: { colors, fontSize, breakPoints }, size }) => css`
		color: ${colors.black};
		font-size: ${size == "small"
			? fontSize.sm
			: size == "medium"
			? fontSize.md
			: fontSize.xl};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize.md};
			line-height: 17.5px;
		}
	`};
`;

export const Ratting = styled.div`
	${({ theme: { colors } }) => css`
		background: ${colors.purple};
	`};
	border-radius: 15px;
	display: flex;
	align-items: center;
	padding: 2px 6px;
	margin-bottom: -1px;
`;

export const Rate = styled.p`
	font-weight: 700;
	font-size: 14px;
	${({ theme: { colors, fontSize, breakPoints }, size }) => css`
		color: ${colors.black};
		font-size: ${size == "small"
			? fontSize.xs
			: size == "medium"
			? fontSize.xs
			: fontSize.md};
		@media (max-width: ${breakPoints.xs}px) {
			font-size: ${fontSize.xs};
			line-height: 12.5px;
		}
	`};
`;
