import styled, { css } from "styled-components";
import { AngleDown } from "../Icons";

export const List = styled.div`
	display: block;
	overflow-x: hidden;
	overflow-y: auto;
	${({ theme: { colors }, hasSearch }) => css`
		background: ${colors.light_gray};
		max-height: ${hasSearch ? "160px" : "120px"};
	`};
`;
export const ListWrapper = styled.div`
	display: inline-block;
	position: absolute;
	margin-top: 8px;
	width: 100%;
	transition: 0.3s all ease-in-out;
	border-radius: 5px;
	overflow-x: hidden;
	z-index: 9;
	min-width: max-content;
	${({ theme: { colors } }) => css`
		background: ${colors.light_gray};
	`}
`;
export const StyledAngleDown = styled(AngleDown)`
	transition: 0.3s all ease-in-out;
`;
export const SearchBarWrapper = styled.div`
	position: relative;
`;
export const StyledLabel = styled.span`
	${({ theme: { font } }) => css`
		font-family: ${font.base};
	`}
`;
export const DropdownItem = styled.div`
	${({ theme: { fontSize, colors, font }, disabled }) => css`
		font-size: ${fontSize.md};
		font-family: ${font.base};
		line-height: 17px;
		border-radius: 4px;
		transition: 0.3s all ease-in-out;
		&:hover {
			background-color: ${disabled ? colors.border : colors.light_green};
		}
	`}
`;
export const StyledDropDown = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	padding: 16px;
	${({ theme: { colors, fontSize, font }, size }) =>
		css`
			font-size: ${fontSize.md};
			light-height: 17px;
			background: ${colors.light_gray};
			font-family: ${font.base};
			width: ${size || "100%"};
		`}
`;
export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	.icon {
		position: absolute;
	}
	${({ theme: { colors, font } }) =>
		css`
			background: ${colors.light_gray};
			font-family: ${font.base};
		`};
`;

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	cursor: pointer;
	box-sizing: border-box;
	transition: 0.3s all ease-in-out;
	${({ open, theme: { colors } }) =>
		css`
			& ${StyledAngleDown} {
				transform: ${open
					? "rotate(180deg) translate(-3px, -1px)"
					: "rotate(0deg) translate(0, -1px)"};
			}
			& ${ListWrapper} {
				height: ${open ? "auto" : "0"};
				box-shadow: 0px 1px 6px 0.5px ${open ? colors.black_100 : "transparent"};
			}
		`}
`;
