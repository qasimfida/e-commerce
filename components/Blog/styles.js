import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
	position: relative;
	height: 370px;
	width: 100%;
	border-radius: 20px;
	overflow: hidden;
	@media (max-width: 768px) {
		height: 196.38px;
	}
`;

export const Content = styled.div`
	padding: 24px;
`;

export const Category = styled.div`
	${({ theme: { colors, font } }) => css`
		color: ${colors.grey};
		font-family: ${font.bold};
	`}
	font-size: 12px;
	line-height: 15px;
	text-transform: uppercase;
`;

export const Title = styled.div`
	${({ theme: { colors, font } }) => css`
		color: ${colors.dark_grey};
	`}
	font-size: 24px;
	line-height: 29px;
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const Desc = styled.div`
	${({ theme: { colors, font } }) => css`
		color: ${colors.dark_grey};
	`}
	font-size: 16px;
	line-height: 19px;
	min-height: 112px;
`;

export const ActionWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const BlogWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	border-radius: 20px;
	${ActionWrapper} button {
		height: 30px;
	}
	${({ theme: { colors, font, breakPoints, fontSize } }) => css`
		background: ${colors.white};
		@media (max-width: ${breakPoints["xs"]}px) {
			border-radius: 5px;
			${Category} {
				font-size: ${fontSize.sm};
				font-family: ${font.base};
				line-height: 14px;
			}
			${ImageWrapper} {
				border-radius: 5px;
			}
			${Content} {
				padding: 18px 24px;
			}
			${Title} {
				font-size: ${fontSize.base};
				font-family: ${font.bold};
				line-height: 19px;
				margin: 8px 0 18px;
			}
			${Desc} {
				font-size: ${fontSize.sm};
				line-height: 15px;
				min-height: 90px;
			}
			${ActionWrapper} button {
				font-size: ${fontSize.sm};
				line-height: 15px;
			}
		}
	`};
`;
