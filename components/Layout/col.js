import styled, { css } from "styled-components";

const Col = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: block;
	${({ xs, theme: { breakPoints } }) =>
		xs &&
		css`
			@media (min-width: ${breakPoints.min}px) {
				grid-column: ${`span ${xs} / span ${xs}`};
			}
		`}
	${({ sm, theme: { breakPoints } }) =>
		sm &&
		css`
			@media (min-width: ${breakPoints.xs}px) {
				grid-column: ${`span ${sm} / span ${sm}`};
			}
		`}
	${({ md, theme: { breakPoints } }) =>
		md &&
		css`
			@media (min-width: ${breakPoints.sm}px) {
				grid-column: ${`span ${md} / span ${md}`};
			}
		`}
	${({ lg, theme: { breakPoints } }) =>
		lg &&
		css`
			@media (min-width: ${breakPoints.md}px) {
				grid-column: ${`span ${lg} / span ${lg}`};
			}
		`}
	${({ xl, theme: { breakPoints } }) =>
		xl &&
		css`
			@media (min-width: ${breakPoints.lg}px) {
				grid-column: ${`span ${xl} / span ${xl}`};
			}
		`}
		
	${({ hiddenUp, theme: { breakPoints } }) =>
		hiddenUp &&
		css`
			@media (min-width: ${breakPoints[hiddenUp]}px) {
				display: none !important;
			}
		`}
	${({ hiddenDown, theme: { breakPoints } }) =>
		hiddenDown &&
		css`
			@media (max-width: ${breakPoints[hiddenDown]}px) {
				display: none !important;
			}
		`}
`;

export default Col;
