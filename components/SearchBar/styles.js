import styled, { css } from "styled-components";
export const Icon = styled.button`
	transition: 0.2s all ease-in-out;
	position: absolute;
	outline: none;
	border: none;
	background: transparent;
	padding: 0;
	left: 20px;
	z-index: 1;
	cursor: pointer;
	&:hover {
		svg {
			stroke: #000;
		}
	}
`;
export const SearchBarWrapper = styled.form`
	${({ theme: { fontSize, font, colors, breakPoints } }) => css`
		position: relative;
		display: flex;
		margin: 0 5px;
		width: 100%;
		align-items: center;
		transition: 0.2s all ease-in-out;
		background: ${colors.white};
		input {
			transition: 0.2s all ease-in-out;
			width: 100%;
			height: 52px;
			background: #fff;
			outline: none;
			box-sizing: border-box;
			border-radius: 5px;
			padding: 0 20px 0 52px;
			font-size: ${fontSize.sm};
			font-family: ${font.base};
			border: 1px solid ${colors.black};
			@media (max-width: ${breakPoints["sm"]}px) {
				padding: 0 20px 0 36px;
				height: 44px;
				${Icon} {
					left: 12px;
				}
			}
		}
		svg {
			stroke: ${colors.dark_gray};
		}

		input:hover,
		input:active,
		input:focus {
			border: 1px solid ${colors.black};
		}
		&:hover {
			button svg {
				transition: 0.2s all ease-in-out;
			}
		}
	`}
`;
