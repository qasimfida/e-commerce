import styled, { css } from "styled-components";
import Dropdown from "../Dropdown";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
export const FiltersPanel = styled.div`
	display: flex;
	gap: 16px;
	padding: 26px 0;
	flex-wrap: wrap;
`;
export const FilteredData = styled.div`
	display: flex;
	padding: 20px 0;
	gap: 16px;
	${({ theme: { colors } }) =>
		css`
			border-top: 1px solid ${colors.border};
		`}
`;
export const StyledDropDown = styled(Dropdown)`
	width: 144px;
`;
