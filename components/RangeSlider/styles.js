import styled, { css } from "styled-components";
import { sliders } from "../../contexts/Theme";

export const WidthFull = styled.div`
	width: 100%;
`;
export const Flex = styled.div`
	display: flex;
`;

export const InputsWraper = styled(Flex)`
	position: relative;
	align-items: center;
`;
export const RangeLabels = styled(WidthFull)`
	position: absolute;
	top: 12px;
`;
export const LabelWrapper = styled(WidthFull)`
	width: 100%;
	margin-top: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;
`;

export const Thumb = styled.input`
	margin: 0;
	transition: 0.3s all ease-in-out;
	height: 0;
	outline: none;
	position: absolute;
	width: 100%;
	pointer-events: none;
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		-webkit-tap-highlight-color: transparent;
	}

	&::-webkit-slider-thumb {
		background-color: ${({ theme: { colors } }) => colors.white} !important;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.2);
		pointer-events: all;
		position: relative;
	}

	&::-moz-range-thumb {
		background-color: ${({ theme: { colors } }) => colors.white} !important;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.2);
		pointer-events: all;
		position: relative;
	}
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
export const RangeInput = styled(Thumb)`
	${({ opacity, index }) => css`
		opacity: ${opacity};
		z-index: ${index};
	`}
`;
export const Bars = styled(WidthFull)`
	position: relative;
`;

export const Range = styled.div`
	width: 100%;
	position: absolute;
	border-radius: 50%;
	background: ${({ first, theme: { colors } }) =>
		first ? colors.black : colors.white_900};
	z-index: ${({ first }) => (first ? 1 : 2)};
	left: ${({ first }) => (first ? "1px" : "unset")};
`;
export const Wrapper = styled.div`
	position: relative;
	padding-bottom: 12px;
	${({ size, theme: { slider } }) => css`
		${RangeInput} {
			&::-webkit-slider-thumb {
				height: ${slider[size].dot} !important;
				width: ${slider[size].dot} !important;
				margin-top: ${slider[size].bar} !important;
			}

			&::-moz-range-thumb {
				height: ${slider[size].dot} !important;
				width: ${slider[size].dot} !important;
				margin-top: ${slider[size].bar} !important;
			}
		}
		${Range} {
			height: ${slider[size].bar} !important;
			border-radius: ${slider[size].bar} !important;
		}
	`}
`;
