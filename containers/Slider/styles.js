import Slider from "react-slick";
import styled, { css } from "styled-components";

export const SlickSlider = styled(Slider)`
	margin: 0 -10px;
	.slick-slide {
		padding: 0 10px;
		box-sizing: border-box;
	}
`;
export const TitleBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	${({ hasBorder, theme: { colors, fonts } }) => css`
		margin-bottom: ${hasBorder ? "21px" : "4px"};
		padding-bottom: 14px;
		border-bottom: ${hasBorder ? `1px solid ${colors.black}` : "none"};
		h2 {
			font-weight: 700;
			font-size: 24px;
			line-height: 29px;
			color: #000000;
			height: 34px;
		}
	`}
`;
export const BlogContainer = styled.div`
	${({ hasBorder, theme: { colors, fonts } }) => css`
		background: ${colors.light_gray};
	`}
`;
export const Navigations = styled.div`
	display: flex;
	gap: 0 10px;
`;
