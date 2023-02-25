import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
	display: inline-flex;
`;
export const StyledInput = styled.input`
	padding: 8px 16px;
	border-radius: 5px;
	outline: none;
	${({ theme: { colors } }) => css`
		background: ${colors.light_gray};
		border: 1px solid ${colors.border};
	`};
`;
export const StyledTextArea = styled.textarea``;
export const StyledLabel = styled.label``;
