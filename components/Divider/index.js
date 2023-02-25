import styled, { css } from "styled-components";
const variants = (size = 1) => ({
	x: {
		height: size + "px",
		width: "100%",
	},
	y: {
		height: "100%",
		width: size + "px",
	},
});
export default styled.div`
	display: list-item;
	list-style-type: none;
	${({ direction = "x", size = 1, color = "grey", theme: { colors } }) => css`
		height: ${variants(size)[direction]["height"]};
		width: ${variants(size)[direction]["width"]};
		background: ${colors[color]};
	`}
`;
