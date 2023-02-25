import styled, { css } from "styled-components";

const Row = styled.div`
	${({ cols, gap, alignItem, justifyContent, theme: { spacing } }) => css`
		grid-gap: ${gap && cols >= 2 ? `${gap * spacing.size}px` : "0px"};
		grid-template-columns: repeat(12, 1fr);
		align-items: ${alignItem || "start"};
		justify-content: ${justifyContent || "start"};
	`}
	${({ gapXs, cols, theme: { breakPoints, spacing } }) =>
		gapXs &&
		css`
			@media (min-width: ${breakPoints.min}px) {
				grid-gap: ${gapXs && cols >= 2 ? `${gapXs * spacing.size}px` : "0px"};
			}
		`}
	${({ gapSm, cols, theme: { breakPoints, spacing } }) =>
		gapSm &&
		css`
			@media (min-width: ${breakPoints.xs}px) {
				grid-gap: ${gapSm && cols >= 2 ? `${gapSm * spacing.size}px` : "0px"};
			}
		`}
	${({ gapMd, cols, theme: { breakPoints, spacing } }) =>
		gapMd &&
		css`
			@media (min-width: ${breakPoints.sm}px) {
				grid-gap: ${gapMd && cols >= 2 ? `${gapMd * spacing.size}px` : "0px"};
			}
		`}
	${({ gapLg, cols, theme: { breakPoints, spacing } }) =>
		gapLg &&
		css`
			@media (min-width: ${breakPoints.md}px) {
				grid-gap: ${gapLg && cols >= 2 ? `${gapLg * spacing.size}px` : "0px"};
			}
		`}
	${({ gapXl, cols, theme: { breakPoints, spacing } }) =>
		gapXl &&
		css`
			@media (min-width: ${breakPoints.lg}px) {
				grid-gap: ${gapXl && cols >= 2 ? `${gapXl * spacing.size}px` : "0px"};
			}
		`}
	width: 100%;
	box-sizing: border-box;
	display: grid;
`;

export default Row;
