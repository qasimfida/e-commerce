import styled, { css } from "styled-components";
import Button from "../Button";
export const Wrapper = styled.div``;
export const BannerWrapper = styled.div`
	background-image: url("/images/top-banner.png");
	min-height: 407px;
	background-position: top-center;
	background-size: cover;
	display: flex;
	align-items: center;
	.z-1 {
		z-index: 1;
		position: relative;
	}
	${({ theme: { breakPoints } }) =>
		css`
			@media (max-width: ${breakPoints["sm"]}px) {
				padding-top: 132px;
				min-height: 278px;
			}
		`}
`;

export const Title = styled.h1`
	font-family: "ProximaBold";
	font-size: 55px;
	line-height: 67px;
	margin-right: -52px;
	${({ theme: { breakPoints, colors } }) =>
		css`
			color: ${colors.black};
			@media (max-width: ${breakPoints["sm"]}px) {
				font-size: 32px;
				line-height: 40px;
				width: 332px;
				margin-right: 0;
			}
		`}
	& span {
		font-family: "sans-serif";
		font-weight: 700;
	}
`;

export const Typo = styled.p`
	font-size: 20px;
	line-height: 23px;
	${({ theme: { breakPoints, colors } }) =>
		css`
			color: ${colors.black};
			@media (max-width: ${breakPoints["sm"]}px) {
				font-size: 16px;
				line-height: 18px;
				width: 208px;
			}
		`}
`;

export const Img = styled.div`
	text-align: center;
	position: absolute;
	left: 55%;
	transform: translatex(-50%);
	top: 66px;
	z-index: 0;
	${({ theme: { breakPoints } }) =>
		css`
			@media (max-width: ${breakPoints["sm"]}px) {
				bottom: -40px;
				top: unset;
				left: unset;
				right: 0;
				transform: translatex(0);
				img {
					width: 206px;
					height: 295px;
				}
			}
		`}
`;
export const RangeWrapper = styled.div`
	max-width: 460px;
`;
export const RangeTitle = styled.h4`
	font-size: 24px;
	line-height: 29px;
	${({ theme: { colors, font, breakPoints, fontSize } }) => css`
		font-family: ${font.bold};
		color: ${colors.black};
		@media (max-width: ${breakPoints["sm"]}px) {
			font-size: ${fontSize["md"]};
			line-height: 17px;
		}
	`}
`;
export const ViewAllButton = styled(Button)`
	${({ theme: { fontSize, breakPoints } }) => css`
		font-size: ${fontSize["3xl"]};
		@media (max-width: ${breakPoints["sm"]}px) {
			font-size: ${fontSize["lg"]};
			height: 42px;
		}
	`}
`;
export const Flex = styled.div`
	display: flex;
`;
